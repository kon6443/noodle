/**
 * mainController.js
 */

const path = require('path');

class mainController {
    constructor(mainServiceInstance) {
        this.mainServiceInstance = mainServiceInstance;
    }

    handleGetMain = async (req, res) => {
        return res.render(path.join(__dirname, '../../views/main/main'));
    }

    handlePostRamyun = async (req, res)=> {
        try {
            await this.mainServiceInstance.orderRamyun(req);
            return res.status(200).json({message: '라면 완료'});
        } catch(err) {
            console.error('error:', err);
            return res.status(500).json(err.message);
        }
    }

    handleGetRamyunStatus = async (req, res) => {
        try {
            const status = this.mainServiceInstance.getCurrentStatus(req);
            return res.status(200).json({status: status});
        } catch(err) {
            console.error(err);
            return res.status(505).json(err.message);
        }
    }

}

module.exports = mainController;

