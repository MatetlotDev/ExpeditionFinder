import dbConnect from "../../models/db_conn"

dbConnect()


export default function test(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
