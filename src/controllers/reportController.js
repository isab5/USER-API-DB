const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const userModel = require("../models/userModel");

const exportUserCSV = async (req, res) => {
    try {
        const users =  await userModel.getUsers();

        res.setHeader("Content-Disposition", "attachment; filename=users.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true});
        csvStream.pipe(res);

        users.forEach((user) => {
            csvStream.write({
                Id: user.id,
                Name: user.name,
                Email: user.email,
            });
        });
        
        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV"});
    }
};

const exportUserPDF = async (req, res) => {
    try {
        const user = await userModel.getUsers();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=users.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Usuários", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Name | Email", {align: "center"});
        doc.moveDown(0.5);

        //Add dados dos Usuários
        user.forEach((user) => {
            doc.fontSize(11).text(
                `${user.id} | ${user.name} | ${user.email}`
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF", error}); 
    }
};

module.exports = { exportUserCSV, exportUserPDF };