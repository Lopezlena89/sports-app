


export const sportApi = async(liga = 0) =>{

    const url = `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${liga}&APIkey=b3c8abeb974a329739d2f207b2fc055821408efe5207fcd66735ed35db8d4828`;
    const res = await fetch(url);
    const {result}=await res.json();
    

    return{
        result
    }


}