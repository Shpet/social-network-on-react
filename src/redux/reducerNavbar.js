let initialState = {
    navbar: {
        friends: [
            { id: 1, name: 'obe-rek', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLTDdAyFQThm2qhIB3TfchgPZB35CpC5qxdPCJDW=s88-c-k-c0x00ffffff-no-rj', isOnline: true },
            { id: 2, name: 'Common Sense', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLS7TVhCSjilZV19qjqCTOTQqsvG2WI_U_pLQ9LzFg=s88-c-k-c0x00ffffff-no-rj', isOnline: false },
            { id: 3, name: 'Suicidal Maniac', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLQeqF1yFvRSjatMqVbLnUVCr1t8QxTTOHiDfwnb2A=s88-c-k-c0x00ffffff-no-rj', isOnline: true },
            { id: 4, name: 'Kingsmen music', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLTCMHmEm6eUldXhVGPUaCsqNypuKUA63EhsdA7Ofw=s88-c-k-c0x00ffffff-no-rj', isOnline: false },
            { id: 5, name: 'Kim\'Ann Raymond', imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLTDdAyFQThm2qhIB3TfchgPZB35CpC5qxdPCJDW=s88-c-k-c0x00ffffff-no-rj', isOnline: false },
        ]
    }
};

const reducerNavbar = (state=initialState) => {
    let stateCopy = {...state};

    return stateCopy;
}

export default reducerNavbar;