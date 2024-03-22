import axios from "axios";
import { useState } from "react";

const dev = true;

const baseref = dev ? "http://127.0.0.1:8000" : ".com";

// const api='AIzaSyBJfoE4KZv3uuMGpXzqvYP4J5Rt3HR8jiw'

export const obtener_Cliente_RazonSocial = async (razon_social = "") => {
  const temp = razon_social.toUpperCase();
  // const [clientes, setclientes] = useState([]);
  var clientes = [];

  try {
    if (temp.length < 4) {
      console.log("no pasa");
      return {
        resp: false,
        clientes:[],
        msg: "razon social debe tener minimo 4 letras",
      };
    }

    const response = await axios.get(
      "https://sheets.googleapis.com/v4/spreadsheets/1vG_Cw_9r3KfvPsbcoPQCEYGWKLMaadHtkmIlUdJHAyc/values/LC!A1:G?key=AIzaSyBJfoE4KZv3uuMGpXzqvYP4J5Rt3HR8jiw"
    );
    const filter = response.data.values.filter((row) =>
      row[2].startsWith(temp)
    );


    filter.map((val) => {

      // console.log(parseInt(val[3].replace(/,/g, '')) );
      const validarLC=(parseInt(val[3].replace(/,/g, '')) >30000)?' es mayor que 30,000':val[3]
      
      const temp_clientes = {
        codigo: val[0],
        ruc: val[1],
        razon_social: val[2],
        linea_credito: validarLC,
        email: val[4],
        telefono: val[5],
        direccion: val[6],
      }
      clientes.push(temp_clientes)
    });
    // console.log(clientes);

    return {
      resp:true,
      clientes:clientes
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export const obtener_Cliente_ruc = async (ruc = 0) => {
  // const temp = razon_social.toUpperCase();
  // const [clientes, setclientes] = useState([]);
  var clientes = [];

  try {
    if (ruc< 10000000000 || ruc>99999999999) {
      console.log("no pasa");
      return {
        resp: false,
        clientes:[],
        msg: "numero ruc no coincide",
      };
    }

    const response = await axios.get(
      "https://sheets.googleapis.com/v4/spreadsheets/1vG_Cw_9r3KfvPsbcoPQCEYGWKLMaadHtkmIlUdJHAyc/values/LC!A1:G?key=AIzaSyBJfoE4KZv3uuMGpXzqvYP4J5Rt3HR8jiw"
    );
    const filter = response.data.values.filter((row) =>
      row[1].startsWith(ruc)
    );


    filter.map((val) => {
      const temp_clientes = {
        codigo: val[0],
        ruc: val[1],
        razon_social: val[2],
        linea_credito: val[3],
        email: val[4],
        telefono: val[5],
        direccion: val[6],
      }
      clientes.push(temp_clientes)
    });

    return {
      resp:true,
      clientes:clientes
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
