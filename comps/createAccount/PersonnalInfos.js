import React, { useRef, useState, useEffect } from 'react'

import styles from '../../styles/comps/createAccount/PersonnalInfos.module.scss'

import { MdCameraEnhance } from 'react-icons/md'
import { IoFemale, IoMaleFemale, IoMale } from 'react-icons/io5'

import Image from 'next/image'


export default function PersonnalInfos({nextStep}) {

  const inputFile = useRef()

  const [countryIcon, setCountryIcon] = useState('')
  const [genderIcon, setGenderIcon] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [countries, setCountries] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    (async () => {
      const req = await fetch('https://restcountries.com/v3.1/region/europe')
      const res = await req.json()

      res.forEach(e => setCountries(arr => [...arr, { name: e.name.common, flag: e.flags.svg }]))

    })()
  }, [])

  useEffect(() => {
    (async () => {
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'tutorial')
      data.append('cloud_name', process.env.CLOUD_NAME)
      const req = await fetch(process.env.CLOUDINARY_URL, {
        method: 'post',
        body: data,
      })
      const res = await req.json()
      setImageUrl(res.url)
    })()
  }, [image])


  const selectGender = (gender) => {
    if (gender === 'male') setGenderIcon(<IoMale color="#353535" size="2rem" />)
    else if (gender === 'female') setGenderIcon(<IoFemale color="#353535" size="2rem" />)
    else setGenderIcon(<IoMaleFemale color="#353535" size="2rem" />)
  }

  const selectCountry = country => setCountryIcon(<Image className={styles.country_image} src={countries.filter(el => el.name === country)[0].flag} layout="fill" objectFit='cover' />);


  return (
    <div className={styles.card}>

          <h2>Informations personnelles</h2>

          <div className={styles.profile_image} onClick={() => inputFile.current.click()}>
            <Image className={styles.image} src={imageUrl || '/svg/undraw_profile_pic_ic-5-t.svg'} layout="fill" objectFit='cover' />
            <div className={styles.country}>{countryIcon}</div>
            <div className={styles.gender}>{genderIcon}</div>
            <MdCameraEnhance className={styles.add_picture} style={{ display: imageUrl ? 'none' : 'block' }} />
          </div>

          <form onSubmit={nextStep}>
            <input ref={inputFile} type="file" name="picture" id="picture" onChange={e => setImage(e.target.files[0])} />
            <select name="gender" id="gender" onChange={v => selectGender(v.target.value)}>
              <option disabled selected >Genre</option>
              <option value="male">Monsieur</option>
              <option value="female">Madame</option>
              <option value="none">Non binaire</option>
            </select>
            <input type="text" name="firstName" placeholder='Nom' />
            <input type="text" name="lastName" placeholder='Prénom' />
            <input type="text" name="email" placeholder='Email' />
            <input type="text" onFocus={v => v.target.type = 'date'} placeholder='Date de naissance' />
            <select name="country" id="country" onChange={v => selectCountry(v.target.value)}>
              <option disabled selected >Nationalité</option>
              {countries.map(el => <option key={el.name} value={el.name}>{el.name}</option>)}
            </select>
            <input type="password" name="password" placeholder='Mot de passe' />
            <input type="password" name="password" placeholder='Confirmer mot de passe' />
            <button type="submit">Suivant</button>
          </form>

          <div className={styles.svg_wrapper}>
            <Image src="/svg/undraw_wall_post_re_y78d.svg" width={300} height={200} />
          </div>

        </div>
  )
}
