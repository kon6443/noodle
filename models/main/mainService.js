/**
 * mainService.js
 */

class MainService {
    constructor(ramyun) {
        this.ramyun = ramyun;
    }

    async orderRamyun(req) { 
        const ramyunStatus = req.session.status;
        if(ramyunStatus===this.ramyun.STATUSES.IDLE || ramyunStatus===this.ramyun.STATUSES.COMPLETED) {
            var ramyunInstance = new this.ramyun();
            await ramyunInstance.startMakingRamyun(req); 
        } else {
            throw new Error('라면이 이미 조리중 입니다.');
        }
    }

    getCurrentStatus(req) {
        return req.session.status;
    }
}

module.exports = MainService;
