import { axiosInstance } from "./axiosInstance"

export const networkManager = {

    getAll: async (url) => {

        let resultData = [];
        await axiosInstance.get(url)
            .then(res => {

                resultData = res.data;
            })
            .catch((err) => {
                throw err
            })

        return resultData;

    },

    getById: async (url) => {
        let resultData = [];
      
        await axiosInstance.get(url)
            .then(res => {
                resultData = res.data;
            })
            .catch((err) => {
                throw err
            })

        return resultData;

    },

    add: async (url, data) => {
        let resultData = {};

        await axiosInstance.post(url, data)
            .then(res => {
                resultData = res.data;
            })


        return resultData;

    },
    update: async (url) => {


    },
    delete: async (url) => {
        let resultData = [];
        await axiosInstance.delete(url)
            .then(res => {

                resultData = res.data;
            })
            .catch((err) => {
                throw err
            })

        return resultData;

    }


}