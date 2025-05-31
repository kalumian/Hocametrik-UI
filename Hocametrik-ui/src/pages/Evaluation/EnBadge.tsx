 enum EnBadge {
    EglenceliDers = "Eğlenceli Ders",
    SikiciDers = "Sıkıcı Ders",
    BonusVeriyor = "Bonus Veriyor",
    HakEdiyor = "Hakkını Veriyor",
    CokOdev = "Çok Ödev Veriyor",
    EmailCevapVermiyor = "E-posta'ya Cevap Vermiyor",
    ZorSinavlar = "Zor Sınavlar",
    SertNotlandirma = "Sert Notlandırma",
    Yardımsever = "Yardımsever ve Anlayışlı",
    AnlatimIyi = "İyi Anlatıyor",
    OzetBilgi = "Bilgiyi sade ve anlaşılır bir biçimde özetliyor"
  }
  export const getBadgeColor = (badge: EnBadge): string => {
    const colorMap: Record<EnBadge, string> = {
      [EnBadge.EglenceliDers]: "bg-green-100 text-green-800",
      [EnBadge.SikiciDers]: "bg-red-100 text-red-800",
      [EnBadge.BonusVeriyor]: "bg-purple-100 text-purple-800",
      [EnBadge.HakEdiyor]: "bg-blue-100 text-blue-800",
      [EnBadge.CokOdev]: "bg-yellow-100 text-yellow-800",
      [EnBadge.EmailCevapVermiyor]: "bg-red-100 text-red-800",
      [EnBadge.ZorSinavlar]: "bg-orange-100 text-orange-800",
      [EnBadge.SertNotlandirma]: "bg-red-100 text-red-800",
      [EnBadge.Yardımsever]: "bg-green-100 text-green-800",
      [EnBadge.AnlatimIyi]: "bg-green-100 text-green-800",
      [EnBadge.OzetBilgi]: "bg-blue-100 text-blue-800"
    };
    return colorMap[badge] || "bg-gray-100 text-gray-800";
  };
  export default EnBadge;