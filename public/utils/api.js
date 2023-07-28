import axios from "axios";
const create_user = "34.101.154.14:8175/hackathon/user/auth/create";


class Api {

    async followQuestion(userId, questionId) {
        try {
            const response = await axios.post(FOLLOW_QUESTION_URL.replace(':userId', userId).replace(':questionId', questionId));
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async getQuestionsByUser(userId) {
        try {
            const response = await axios.get(GET_QUESTION_USER_URL.replace(':userId', userId));
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async getCommentReplies(commentId) {
        try {
            const response = await axios.get(GET_COMMENT_REPLIES_URL.replace(':commentId', commentId));
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async editComment(token, commentId, editContent) {
        const body = {
            "editedContent" : editContent,
        };
        const headers = {
            'Authorization': `Bearer ${token}`,
        };

        try {
            const response = await axios.patch(EDIT_COMMENT_URL.replace(':commentId', commentId), body, { headers });
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async deleteComment(token, commentId) {
        const headers = {
            'Authorization': `Bearer ${token}`,
        };

        try {
            const response = await axios.delete(DELETE_COMMENT_URL.replace(':commentId', commentId), { headers })
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async deleteQuestion(token, questionId) {
        const headers = {
            'Authorization': `Bearer ${token}`,
        };

        try {
            const response = await axios.delete(DELETE_QUESTION_URL.replace(':questionId', questionId), { headers })
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async getAllQuestions(){
        try {
            const response = await axios.get(GET_ALL_QUESTIONS_URL);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async getQuestion(questionId){
        try {
            const response = await axios.get(GET_QUESTION_URL.replace(':questionId', questionId));
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    static async setQuestionClosed(token, questionId){
        const headers = {
            'Authorization': `Bearer ${token}`,
        };
        try {
            const response = await axios.patch(
                GET_QUESTION_URL.replace(':questionId', questionId + "?status=SELESAI"), 
                {}, // PATCH requests usually require a data body, but you can pass an empty object if there is no data to send
                { headers } // attach headers here
            )
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

}

export default Api;