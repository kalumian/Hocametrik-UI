enum EnRank {
    AA = "AA",
    BA = "BA",
    BB = "BB",
    CB = "CB",
    CC = "CC",
    DC = "DC",
    DD = "DD",
    FF = "FF",
    DZ = "Devamsızlık",
    Birakti = "Bıraktı"
  }
  export const getRankColor = (Rank: EnRank): string => {
    const colorMap: Record<EnRank, string> = {
      [EnRank.AA]: "bg-green-100 text-green-800",
      [EnRank.BA]: "bg-green-100 text-green-800",
      [EnRank.BB]: "bg-blue-100 text-blue-800",
      [EnRank.CB]: "bg-blue-100 text-blue-800",
      [EnRank.CC]: "bg-yellow-100 text-yellow-800",
      [EnRank.DC]: "bg-yellow-100 text-yellow-800",
      [EnRank.DD]: "bg-orange-100 text-orange-800",
      [EnRank.FF]: "bg-red-100 text-red-800",
      [EnRank.DZ]: "bg-gray-100 text-gray-800",
      [EnRank.Birakti]: "bg-gray-100 text-gray-800"
    };
    return colorMap[Rank] || "bg-gray-100 text-gray-800";
  };
export default EnRank;  