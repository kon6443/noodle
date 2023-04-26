/**
 * filter.js
 */

class Filter {
    constructor(ramyun) {
        this.ramyun = ramyun;
    } 
    
    assureRamyunObject = async (req, res, next) => {
        try {
            req.session.status ??= this.ramyun.STATUSES.IDLE;
            next();
        } catch(err) {
            throw new Error(err);
        }
    }
}

module.exports = Filter;
