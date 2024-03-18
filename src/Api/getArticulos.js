import axios from "axios";

export const obtener_productos_sku = async (sku = "") => {
    const temp = sku.toUpperCase();
    // const [clientes, setclientes] = useState([]);
    var productos = [];
  
    try {
      if (temp.length < 1) {
        console.log("no pasa");
        return {
          resp: false,
          productos:[],
          msg: "El SKU debe tener minimo 1 letras",
        };
      }
  
      const response = await axios.get(
        "https://sheets.googleapis.com/v4/spreadsheets/1vG_Cw_9r3KfvPsbcoPQCEYGWKLMaadHtkmIlUdJHAyc/values/Productos!A1:D?key=AIzaSyBJfoE4KZv3uuMGpXzqvYP4J5Rt3HR8jiw"
      );
      const filter = response.data.values.filter((row) =>
        row[1].startsWith(temp)
      );
  
      filter.map((val) => {
        const tempdescripcion=(val[3].length >25) ? val[3].substring(0, 25) + "..." : val[3]

        const temp_producots = {
          sap:val[0],
          sku:val[1],
          descripcion:tempdescripcion
        }
        productos.push(temp_producots)
      });



      return {
        resp:true,
        productos:productos
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };