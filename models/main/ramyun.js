/**
 * Ramyun.js
 */

class Ramyun {
    static STATUSES = {
        IDLE: '대기중', 
        PREPARING: '준비중',
        BOILING_WATER: '물 끓이는 중', 
        ADDING_INGREDIENTS: '라면과 스프를 넣어 추가로 끓이는 중',
        COMPLETED: '라면 완료'
    }
    constructor() {
        this.status = Ramyun.STATUSES.IDLE;
        this.second = 1000;
        this.minute = 60*this.second;
    }
    getStatus() {
        return this.status;
    }
    async prepareRamyun() {
        const waiting_time = 15 * this.second;
        this.status = `${Ramyun.STATUSES.PREPARING} (${0.001*waiting_time}초 소요 예정입니다).`;
        await new Promise(resolve => setTimeout(resolve, waiting_time));
    }
    async boilWater() {
        const waiting_time = 1 * this.minute;
        this.status = `${Ramyun.STATUSES.BOILING_WATER} (${0.001*waiting_time}초 소요 예정입니다).`;
        await new Promise(resolve => setTimeout(resolve, waiting_time));
    }

    async putIngredients() {
        const waiting_time = 1 * this.minute;
        this.status = `${Ramyun.STATUSES.ADDING_INGREDIENTS} (${0.001*waiting_time}초 소요 예정입니다).`;
        await new Promise(resolve => setTimeout(resolve, waiting_time));
    }
    completeRamyun() {
        this.status = Ramyun.STATUSES.COMPLETED;
    }
    setCurrentStatus() {
        this.status = Ramyun.STATUSES.PREPARING;
    }

    async startMakingRamyun() {
        await this.prepareRamyun();
        await this.boilWater();
        await this.putIngredients();
        this.completeRamyun();
    }
}

module.exports = Ramyun;
