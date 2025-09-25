export function youtubeToEmbed(url: string): string {
  try {
    const urlObj = new URL(url);
    let videoId = "";

    // caso o link seja do formato youtu.be/XXXX
    if (urlObj.hostname.includes("youtu.be")) {
      videoId = urlObj.pathname.slice(1); // remove a /
    } else {
      // padrão youtube.com/watch?v=XXXX
      videoId = urlObj.searchParams.get("v") || "";
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch (err) {
    console.error("URL do YouTube inválida:", url);
    return url; // retorna original caso algo dê errado
  }
}