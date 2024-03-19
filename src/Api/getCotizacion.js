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
    
    
    // return sheetUpdate
    
  }
  
  function cierre(sheet) {
    sheet.getCell(40,2).value='*El plazo máximo de entrega de los productos es de cinco (3) días hábiles contados a partir del día siguiente de la verificación del deposito en la cuenta de RASH PERU SAC'
      sheet.mergeCells('B40:L40');
      
      sheet.getCell(42,2).value='CUENTA CORRIENTE SOLES BCP'
      sheet.mergeCells('B42:E42');
      sheet.getCell('B42').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B42').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
      sheet.getCell('B42').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell('B42').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
      sheet.getCell(43,2).value='SOLES:    193-1115038-0-09'
      sheet.mergeCells('B43:E43');
      sheet.getCell('B43').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B43').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(44,2).value='CCI:     002-193-001115038009-12'
      sheet.mergeCells('B44:E44');
      sheet.getCell('B44').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B44').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      sheet.getCell(45,2).value='CUENTA CORRIENTE SOLES BBVA'
      sheet.mergeCells('B45:E45');
      sheet.getCell('B45').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B45').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
      sheet.getCell('B45').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell('B45').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
      sheet.getCell(46,2).value='SOLES:   0011-0686-0100024765'
      sheet.mergeCells('B46:E46');
      sheet.getCell('B46').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B46').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(47,2).value='CCI:    011-686-000100024765-38'
      sheet.mergeCells('B47:E47');
      sheet.getCell('B47').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B47').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      sheet.getCell(48,2).value='CUENTA CORRIENTE SOLES INTERBANK'
      sheet.mergeCells('B48:E48');
      sheet.getCell('B48').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B48').fill = {      type: 'pattern',      pattern: 'solid',      fgColor: { argb: 'FFFF0000' }   }
      sheet.getCell('B48').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell('B48').font =  {size: 12, color: { argb: 'FFFFFFFF' }, bold: true}
      sheet.getCell(49,2).value='SOLES:   200-3000232023'
      sheet.mergeCells('B49:E49');
      sheet.getCell('B49').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B49').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      sheet.getCell(50,2).value='CCI:    003-200-003000232023-39'
      sheet.mergeCells('B50:E50');
      sheet.getCell('B50').alignment = { vertical: 'middle', horizontal: 'center' };
      sheet.getCell('B50').border = {      top: { style: 'thin' },      left: { style: 'thin' },      bottom: { style: 'thin' },      right: { style: 'thin' },    };
      
      
      
      sheet.getCell(42,8).value='Nota: Realizar los abonos solo a las cuentas de la empresa RASH PERU S.A.C.'
      sheet.mergeCells('H42:L45');
      sheet.getCell('H42').alignment = { vertical: 'top', wrapText: true }
    
  }
  
  
  
  
  export async function leer_excel() {
    try {
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('Sheet1',{views: [{showGridLines: false}]});
      
      
      // cabecera(sheet)
      // Valores
      
      
      
      
      
      cabecera(sheet)
      cierre(sheet)
      
      
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
