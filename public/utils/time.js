export const getTimeSince = (time) => {
    const now = new Date();
    const then = new Date(time);
    const diff = (now.getTime() - then.getTime()) / 1000;

    if (diff < 60) {
        return `${Math.floor(diff)} second(s) ago`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} minute(s) ago`;
    } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)} hour(s) ago`;
    } else if (diff < 604800) {
        return `${Math.floor(diff / 86400)} day(s) ago`;
    } else if (diff < 2592000) {
        return `${Math.floor(diff / 604800)} week(s) ago`;
    } else if (diff < 31536000) {
        return `${Math.floor(diff / 2592000)} month(s) ago`;
    } else {
        return `${Math.floor(diff / 31536000)} year(s) ago`;
    }
};