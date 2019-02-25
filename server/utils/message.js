let generateMessage = (from, text) => {
    return {
        from: from,
        text: text,
        createdAt: new Date().getTime()
    }
};

let generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    }
};

module.exports = {generateMessage,generateLocationMessage};