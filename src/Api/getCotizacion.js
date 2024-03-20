import ExcelJS from "exceljs";
import { saveAs } from 'file-saver';

function cabecera(sheet){

  sheet.getCell(4,2).value='RASH PERU S.A.C.'
sheet.getCell(5,2).value='AV. SALAVERRY NRO. 3310'
sheet.getCell(6,2).value='MAGDALENA DEL MAR - LIMA'
sheet.getCell(7,2).value='RUC :  20378890161'
sheet.getCell(9,2).value='CLIENTE (Razón Social)'
sheet.getCell(11,2).value='RUC: '
sheet.getCell(13,2).value='DIRECCIÓN FISCAL:'

sheet.getCell(9,8).value='COTIZACIÓN VCO'
sheet.getCell(10,8).value='Fecha'
sheet.getCell(11,8).value='Forma de Pago'
sheet.getCell(12,8).value='Vigencia'
sheet.getCell(13,8).value='Tiempo de entrega'
sheet.getCell(13,11).value='48 horas'
sheet.getCell(14,8).value='Tipo de cambio'

sheet.getCell(18,2).value='CLIENTE (DATOS ADICIONALES)'
sheet.getCell(19,2).value='NOMBRE:'
sheet.getCell(20,2).value='TELÉFONO:'
sheet.getCell(21,2).value='CORREO:'

sheet.getCell(18,8).value='Datos Ejecutivo Comercial'
sheet.getCell(19,8).value='Nombre '
sheet.getCell(20,8).value='Teléfono'
sheet.getCell(21,8).value='Correo'


sheet.getCell(25,2).value='N°'
sheet.getCell(25,3).value='Código'
sheet.getCell(25,4).value='Descripción'
sheet.getCell(25,8).value='Marca'
sheet.getCell(25,9).value='Cantidad'
sheet.getCell(25,10).value='Precio sin IGV'
sheet.getCell(25,11).value='Precio con IGV'
sheet.getCell(25,12).value='Importe sin IGV'

    // row colu}
    // fila 10 razon social 12 ruc 15 direccion
    // Combinar
    sheet.mergeCells('B4:E4');
    sheet.mergeCells('B5:E5');
    sheet.mergeCells('B6:E6');
    sheet.mergeCells('B7:E7');
    sheet.mergeCells('B9:E9');
    sheet.mergeCells('B10:E10');
    sheet.mergeCells('B11:E11');
    sheet.mergeCells('B12:E12');
    sheet.mergeCells('B13:E13');
    sheet.mergeCells('B14:E14');

    sheet.mergeCells('B18:E18');
    sheet.mergeCells('C19:E19');
    sheet.mergeCells('C20:E20');
    sheet.mergeCells('C21:E21');

    sheet.getColumn(2).width = 13
    sheet.getColumn(6).width = 20
    sheet.getColumn(7).width = 20

    
    sheet.mergeCells('H9:L9');
    sheet.mergeCells('H10:J10');
    sheet.mergeCells('H11:J11');
    sheet.mergeCells('H12:J12');
    sheet.mergeCells('H13:J13');
    sheet.mergeCells('H14:J14');
    sheet.mergeCells('K10:L10');
    sheet.mergeCells('K11:L11');
    sheet.mergeCells('K12:L12');
    sheet.mergeCells('K13:L13');
    sheet.mergeCells('K14:L14');
    
    sheet.mergeCells('H18:L18');
    sheet.mergeCells('H19:I19');
    sheet.mergeCells('H20:I20');
    sheet.mergeCells('H21:I21');
    sheet.mergeCells('J19:L19');
    sheet.mergeCells('J20:L20');
    sheet.mergeCells('J21:L21');
    
    sheet.mergeCells('D25:G25');
    // Centrar
    sheet.getCell('B9').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('B10').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('B11').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('B12').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('B13').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('B14').alignment = { vertical: 'middle', horizontal: 'center' };

    sheet.getCell('B18').alignment = { vertical: 'middle', horizontal: 'center' };
    
    sheet.getCell('H9').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('H18').alignment = { vertical: 'middle', horizontal: 'center' };

    sheet.getCell('B25').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('C25').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('D25').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('H25').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('I25').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('J25').alignment = { vertical: 'middle', horizontal: 'center',wrapText: true  };
    sheet.getCell('K25').alignment = { vertical: 'middle', horizontal: 'center',wrapText: true  };
    sheet.getCell('L25').alignment = { vertical: 'middle', horizontal: 'center',wrapText: true  };
    
    // Color

    sheet.getCell('B9').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('B11').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('B13').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('B18').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('H9').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('H18').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('H19').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('H20').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
    sheet.getCell('H21').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }

    sheet.getCell('H21').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }


sheet.getCell('B25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
sheet.getCell('C25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
sheet.getCell('D25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
sheet.getCell('H25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
sheet.getCell('I25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
sheet.getCell('J25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
sheet.getCell('K25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
sheet.getCell('L25').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }

    
    sheet.getCell('B9').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('B11').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('B13').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('B18').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('H9').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('H18').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('H19').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('H19').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('H20').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
    sheet.getCell('H21').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}

sheet.getCell('B25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
sheet.getCell('C25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
sheet.getCell('D25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
sheet.getCell('H25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
sheet.getCell('I25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
sheet.getCell('J25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
sheet.getCell('K25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}
sheet.getCell('L25').font =  {size: 11, color: { argb: 'FFFFFFFF' }, bold: true}



    // Border

    sheet.getCell('B9').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B10').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B11').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B12').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B13').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B14').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    
    sheet.getCell('B18').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B19').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B20').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('B21').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('C19').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('C20').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('C21').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    
    
    sheet.getCell('H9').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H10').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H11').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H12').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H13').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H14').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('K10').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('K11').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('K12').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('K13').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('K14').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    
    
    sheet.getCell('H18').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H19').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H20').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H21').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('J19').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('J20').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('J21').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    
    
    sheet.getCell('B25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('C25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('D25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('H25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('I25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('J25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('K25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
    sheet.getCell('L25').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };

 



    // return sheetUpdate
    
  }
  
  function cierre(sheet,row) {
    console.log(row);
    sheet.getCell(row,2).value='*El plazo máximo de entrega de los productos es de cinco (3) días hábiles contados a partir del día siguiente de la verificación del deposito en la cuenta de RASH PERU SAC'
      sheet.mergeCells(`B${row}:L${row}`);
      
      sheet.getCell(row+2,2).value='CUENTA CORRIENTE SOLES BCP'
      sheet.mergeCells(`B${row+2}:E${row+2}`);
      sheet.getCell(`B${row+2}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+2}`).fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
      sheet.getCell(`B${row+2}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`B${row+2}`).font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
      sheet.getCell(row+3,2).value='SOLES:    193-1115038-0-09'
      sheet.mergeCells(`B${row+3}:E${row+3}`);
      sheet.getCell(`B${row+3}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+3}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(row+4,2).value='CCI:     002-193-001115038009-12'
      sheet.mergeCells(`B${row+4}:E${row+4}`);
      sheet.getCell(`B${row+4}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+4}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      sheet.getCell(row+5,2).value='CUENTA CORRIENTE SOLES BBVA'
      sheet.mergeCells(`B${row+5}:E${row+5}`);
      sheet.getCell(`B${row+5}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+5}`).fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
      sheet.getCell(`B${row+5}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`B${row+5}`).font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
      
      
      sheet.getCell(row+6,2).value='SOLES:   0011-0686-0100024765'
      sheet.mergeCells(`B${row+6}:E${row+6}`);
      sheet.getCell(`B${row+6}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+6}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      
      sheet.getCell(row+7,2).value='CCI:    011-686-000100024765-38'
      sheet.mergeCells(`B${row+7}:E${row+7}`);
      sheet.getCell(`B${row+7}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+7}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      sheet.getCell(row+8,2).value='CUENTA CORRIENTE SOLES INTERBANK'
      sheet.mergeCells(`B${row+8}:E${row+8}`);
      sheet.getCell(`B${row+8}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+8}`).fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
      sheet.getCell(`B${row+8}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`B${row+8}`).font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
     
      sheet.getCell(row+9,2).value='SOLES:   200-3000232023'
      sheet.mergeCells(`B${row+9}:E${row+9}`);
      sheet.getCell(`B${row+9}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+9}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      sheet.getCell(row+10,2).value='CCI:    003-200-003000232023-39'
      sheet.mergeCells(`B${row+10}:E${row+10}`);
      sheet.getCell(`B${row+10}`).alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell(`B${row+10}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      
      
      sheet.getCell(row+2,8).value='Nota: Realizar los abonos solo a las cuentas de la empresa RASH PERU S.A.C.'
      sheet.mergeCells(`H${row+2}:L${row+5}`);
      sheet.getCell(`H${row+2}`).alignment = { vertical: 'top', wrapText: true }
    
  }
  
  
  
  
  export async function leer_excel(productos=[]) {
    try {


      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('Sheet1',{views: [{showGridLines: false}]});
      
      cabecera(sheet)
      if (productos.length>7) {
        cierre(sheet,31+productos.length)
        
      } else {
        cierre(sheet,38)
        
      }
    

      const startRow=26
      productos.map(({sku,descripcion,cantidad,precio},i)=>{

      const refRow=startRow+i
      sheet.getCell(refRow,2).value=i+1
      sheet.getCell(refRow,3).value=sku
      sheet.getCell(refRow,4).value=descripcion
      sheet.mergeCells(`D${refRow}:G${refRow}`);
      

      
      
      sheet.getCell(refRow,9).value=Number(cantidad)
      sheet.getCell(refRow,10).value=parseFloat(((precio) / 1.18).toFixed(2))
      
      sheet.getCell(refRow,11).value=parseFloat(precio)
      
      sheet.getCell(refRow,12).value=cantidad*((precio) / 1.18).toFixed(2)
      
      sheet.getCell(`B${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`C${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`D${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`H${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`I${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`J${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`K${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(`L${refRow}`).border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      // sheet.insertRows(refRow+1)





      })
      
      
     
      // console.log(listProducts);
      
      // Comenzar a insertar desde la celda B26
      // const startRow = 26;
      // const startColumn=2;
      // data.forEach((rowData, rowIndex) => {
      //   const rowNumber = startRow + rowIndex;
      //   rowData.forEach((cellData, colIndex) => {
      //     const colLetter = String.fromCharCode(65 + startColumn + colIndex); // A=65, B=66, ...
      //     sheet.getCell(`${colLetter}${rowNumber}`).value = cellData;
      //   });
      // });

    // Guardar el archivo Excel
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'cotizador.xlsx');
  } catch (error) {
    console.log(error);
  }
}
