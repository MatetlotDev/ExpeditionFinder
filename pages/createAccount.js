import React, { useEffect, useState, useRef } from 'react'

import styles from '../styles/CreateAccount.module.scss'

import NavBar from '../comps/NavBar'

import Image from 'next/image'

import { IoFemale, IoMaleFemale, IoMale } from 'react-icons/io5'
import { MdCameraEnhance } from 'react-icons/md'


export default function createAccount() {

  const inputFile = useRef()

  const [countryIcon, setCountryIcon] = useState('')
  const [genderIcon, setGenderIcon] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    (async () => {
      const req = await fetch('https://restcountries.com/v3.1/region/europe')
      const res = await req.json()

      res.forEach(e => setCountries(arr => [...arr, { name: e.name.common, flag: e.flags.svg }]))

    })()
  }, [])


  const selectGender = (gender) => {
    if (gender === 'male') setGenderIcon(<IoMale color="#353535" size="1.5rem" />)
    else if (gender === 'female') setGenderIcon(<IoFemale color="#353535" size="1.5rem" />)
    else setGenderIcon(<IoMaleFemale color="#353535" size="1.5rem" />)
  }

  const selectCountry = country => setCountryIcon(<Image className={styles.country_image} src={countries.filter(el => el.name === country)[0].flag} layout="fill" objectFit='cover' />);

  const selectPicture = () => {
    console.log(inputFile.current.value)
  }
  
  return (
    <div className={styles.container}>

      <NavBar />

      <div className={styles.content}>
        <div className={styles.card}>

          <h2>Informations personnelles</h2>

          <div className={styles.profile_image}>
            <Image className={styles.image} src='/svg/undraw_profile_pic_ic-5-t.svg' layout="fill" objectFit='cover' />
            <div className={styles.country}>{countryIcon}</div>
            <div className={styles.gender}>{genderIcon}</div>
            <MdCameraEnhance onClick={selectPicture} className={styles.add_picture} />
          </div>

          <form>
            <input ref={inputFile} type="file" name="picture" id="picture" style={{display: 'none'}}/>
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
            <input type="text" name="password" placeholder='Mot de passe' />
            <input type="text" name="password" placeholder='Confirmer mot de passe' />
            <button type="submit">Suivant</button>
          </form>

          <div className={styles.svg_wrapper}>
            <Image src="/svg/undraw_wall_post_re_y78d.svg" width={300} height={200} />
          </div>

        </div>
      </div>
    </div>
  )
}
