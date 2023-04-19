/**
 * Ramyun.js
 */

class MainService {
    constructor(ramyun) {
        this.ramyun = ramyun;
    }

    async orderRamyun() {
        const ramyunStatus = this.ramyun.getStatus();
        if(ramyunStatus==='대기중' || ramyunStatus==='라면 완료') {
            await this.ramyun.startMakingRamyun(); 
        } else {
            throw new Error('라면이 이미 조리중 입니다.');
        }
    }
    getCurrentStatus() {
        return this.ramyun.getStatus();
    }
}

module.exports = MainService;
