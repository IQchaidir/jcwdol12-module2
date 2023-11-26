/** @format */

import { Input } from "@chakra-ui/react";

function InputComponent({ set }) {
  return <Input onChange={(e) => set(e.target.value)}></Input>;
}
export default InputComponent;
// const obj = { name: "hello" };
// const { name } = obj;
// name

//alasan menggunakan state
//state dideclare dalam sebuah component
//state adalah variable yang bisa otomatis re-render apabila valuenya berubah
//kita bisa mengirimkan sebuah value/state melalui props
//untuk mengirimkan props, component yang menerima wajib sebagai children dari component yang mengirimkan props

//state adalah variable
//global state = adalah sebuah state yang bisa diakses lewat component apapun tanpa perlu pedulikan parentnya
//global state tidak memerlukan passing lewat props

// kita belanja tokped
// login => id,username,alamat,foto
// home,navbar => navbar memunculkan username
// home pindah ke sebuah product , username masih muncul
// checkout > product, alamatnya
