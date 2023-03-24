/*
* Copyright(c) 2023 Jalasoft
* 2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
* Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
* All rights reserved
* This software is the confidential and proprietary information of
* Jalasoft,ConfidentialInformation"). You shall not
* disclose such Confidential Information and shall use it only in
* accordance with the terms of the license agreement you entered into
* with Jalasoft
*/

const Questionnaire = require("../services/Questionnaire")

class QuestionnaireController {
    // gets a Questionnaire for a test
    async getQuestionnaire(req, res) {
        const test = req.body.test;
        const questionnaire = await new Questionnaire().getQuestionnaire(test)
        res.status(200).json(questionnaire);
    }
}

module.exports = QuestionnaireController;
