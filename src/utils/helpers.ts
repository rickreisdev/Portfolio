export const normalizeYoutubeUrl = (url: string) => {
    if (url.includes("youtube.com/shorts/")) {
        return url.replace(
            "youtube.com/shorts/",
            "youtube.com/embed/"
        );
    }

    if (url.includes("watch?v=")) {
        const videoId = url
            .split("watch?v=")[1]
            .split("&")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
};
