const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
  "Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
  "Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad",
  "Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominica","Dominican Republic","DR Congo","Ecuador","Egypt","El Salvador",
  "Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon",
  "Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
  "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
  "Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati",
  "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
  "Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
  "Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia",
  "Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
  "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines",
  "Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
  "Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia",
  "Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka",
  "Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand",
  "Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan",
  "Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States",
  "Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const CITIES = [
  {n:"Cairo",c:"Egypt"},{n:"Alexandria",c:"Egypt"},{n:"Giza",c:"Egypt"},{n:"Luxor",c:"Egypt"},{n:"Aswan",c:"Egypt"},{n:"Port Said",c:"Egypt"},{n:"Suez",c:"Egypt"},{n:"Mansoura",c:"Egypt"},{n:"Tanta",c:"Egypt"},{n:"Asyut",c:"Egypt"},{n:"Ismailia",c:"Egypt"},{n:"Fayyum",c:"Egypt"},{n:"Zagazig",c:"Egypt"},{n:"Damietta",c:"Egypt"},{n:"Minya",c:"Egypt"},
  {n:"Riyadh",c:"Saudi Arabia"},{n:"Jeddah",c:"Saudi Arabia"},{n:"Mecca",c:"Saudi Arabia"},{n:"Medina",c:"Saudi Arabia"},{n:"Dammam",c:"Saudi Arabia"},{n:"Khobar",c:"Saudi Arabia"},{n:"Taif",c:"Saudi Arabia"},{n:"Tabuk",c:"Saudi Arabia"},{n:"Buraidah",c:"Saudi Arabia"},{n:"Khamis Mushait",c:"Saudi Arabia"},{n:"Abha",c:"Saudi Arabia"},{n:"Hail",c:"Saudi Arabia"},{n:"Jubail",c:"Saudi Arabia"},
  {n:"Dubai",c:"United Arab Emirates"},{n:"Abu Dhabi",c:"United Arab Emirates"},{n:"Sharjah",c:"United Arab Emirates"},{n:"Al Ain",c:"United Arab Emirates"},{n:"Ajman",c:"United Arab Emirates"},{n:"Ras Al Khaimah",c:"United Arab Emirates"},{n:"Fujairah",c:"United Arab Emirates"},{n:"Umm Al Quwain",c:"United Arab Emirates"},
  {n:"Kuwait City",c:"Kuwait"},{n:"Al Ahmadi",c:"Kuwait"},{n:"Hawalli",c:"Kuwait"},{n:"Salmiya",c:"Kuwait"},{n:"Doha",c:"Qatar"},{n:"Al Rayyan",c:"Qatar"},{n:"Muscat",c:"Oman"},{n:"Salalah",c:"Oman"},{n:"Sohar",c:"Oman"},{n:"Manama",c:"Bahrain"},{n:"Riffa",c:"Bahrain"},
  {n:"Istanbul",c:"Turkey"},{n:"Ankara",c:"Turkey"},{n:"Izmir",c:"Turkey"},{n:"Bursa",c:"Turkey"},{n:"Antalya",c:"Turkey"},{n:"Konya",c:"Turkey"},{n:"Adana",c:"Turkey"},{n:"Gaziantep",c:"Turkey"},{n:"Mersin",c:"Turkey"},{n:"Kayseri",c:"Turkey"},{n:"Eskisehir",c:"Turkey"},{n:"Trabzon",c:"Turkey"},{n:"Urfa",c:"Turkey"},
  {n:"Tehran",c:"Iran"},{n:"Mashhad",c:"Iran"},{n:"Isfahan",c:"Iran"},{n:"Shiraz",c:"Iran"},{n:"Tabriz",c:"Iran"},{n:"Qom",c:"Iran"},{n:"Ahvaz",c:"Iran"},{n:"Kermanshah",c:"Iran"},{n:"Rasht",c:"Iran"},{n:"Zahedan",c:"Iran"},
  {n:"Baghdad",c:"Iraq"},{n:"Basra",c:"Iraq"},{n:"Erbil",c:"Iraq"},{n:"Mosul",c:"Iraq"},{n:"Kirkuk",c:"Iraq"},{n:"Najaf",c:"Iraq"},{n:"Karbala",c:"Iraq"},{n:"Sulaymaniyah",c:"Iraq"},
  {n:"Amman",c:"Jordan"},{n:"Zarqa",c:"Jordan"},{n:"Irbid",c:"Jordan"},{n:"Aqaba",c:"Jordan"},{n:"Beirut",c:"Lebanon"},{n:"Tripoli",c:"Lebanon"},{n:"Sidon",c:"Lebanon"},{n:"Damascus",c:"Syria"},{n:"Aleppo",c:"Syria"},{n:"Homs",c:"Syria"},{n:"Latakia",c:"Syria"},
  {n:"Jerusalem",c:"Palestine"},{n:"Gaza",c:"Palestine"},{n:"Ramallah",c:"Palestine"},{n:"Nablus",c:"Palestine"},{n:"Hebron",c:"Palestine"},{n:"Bethlehem",c:"Palestine"},
  {n:"Sanaa",c:"Yemen"},{n:"Aden",c:"Yemen"},{n:"Taiz",c:"Yemen"},{n:"Hodeidah",c:"Yemen"},{n:"Mukalla",c:"Yemen"},
  {n:"Khartoum",c:"Sudan"},{n:"Omdurman",c:"Sudan"},{n:"Port Sudan",c:"Sudan"},{n:"Tripoli",c:"Libya"},{n:"Benghazi",c:"Libya"},{n:"Misrata",c:"Libya"},{n:"Tunis",c:"Tunisia"},{n:"Sfax",c:"Tunisia"},{n:"Sousse",c:"Tunisia"},{n:"Algiers",c:"Algeria"},{n:"Oran",c:"Algeria"},{n:"Constantine",c:"Algeria"},{n:"Annaba",c:"Algeria"},{n:"Rabat",c:"Morocco"},{n:"Casablanca",c:"Morocco"},{n:"Fez",c:"Morocco"},{n:"Marrakech",c:"Morocco"},{n:"Tangier",c:"Morocco"},{n:"Agadir",c:"Morocco"},{n:"Salé",c:"Morocco"},{n:"Meknes",c:"Morocco"},
  {n:"Jakarta",c:"Indonesia"},{n:"Surabaya",c:"Indonesia"},{n:"Bandung",c:"Indonesia"},{n:"Medan",c:"Indonesia"},{n:"Semarang",c:"Indonesia"},{n:"Makassar",c:"Indonesia"},{n:"Palembang",c:"Indonesia"},{n:"Yogyakarta",c:"Indonesia"},{n:"Depok",c:"Indonesia"},{n:"Tangerang",c:"Indonesia"},{n:"Malang",c:"Indonesia"},
  {n:"Karachi",c:"Pakistan"},{n:"Lahore",c:"Pakistan"},{n:"Islamabad",c:"Pakistan"},{n:"Rawalpindi",c:"Pakistan"},{n:"Faisalabad",c:"Pakistan"},{n:"Multan",c:"Pakistan"},{n:"Peshawar",c:"Pakistan"},{n:"Quetta",c:"Pakistan"},{n:"Sargodha",c:"Pakistan"},{n:"Sialkot",c:"Pakistan"},{n:"Bahawalpur",c:"Pakistan"},
  {n:"Dhaka",c:"Bangladesh"},{n:"Chittagong",c:"Bangladesh"},{n:"Khulna",c:"Bangladesh"},{n:"Rajshahi",c:"Bangladesh"},{n:"Sylhet",c:"Bangladesh"},{n:"Mymensingh",c:"Bangladesh"},{n:"Rangpur",c:"Bangladesh"},
  {n:"Mumbai",c:"India"},{n:"Delhi",c:"India"},{n:"Bangalore",c:"India"},{n:"Hyderabad",c:"India"},{n:"Ahmedabad",c:"India"},{n:"Chennai",c:"India"},{n:"Kolkata",c:"India"},{n:"Lucknow",c:"India"},{n:"Pune",c:"India"},{n:"Jaipur",c:"India"},{n:"Surat",c:"India"},{n:"Kanpur",c:"India"},{n:"Nagpur",c:"India"},{n:"Patna",c:"India"},{n:"Bhopal",c:"India"},{n:"Kochi",c:"India"},{n:"Malappuram",c:"India"},{n:"Calicut",c:"India"},{n:"Thrissur",c:"India"},
  {n:"Kuala Lumpur",c:"Malaysia"},{n:"Johor Bahru",c:"Malaysia"},{n:"George Town",c:"Malaysia"},{n:"Ipoh",c:"Malaysia"},{n:"Shah Alam",c:"Malaysia"},{n:"Kota Kinabalu",c:"Malaysia"},{n:"Kuching",c:"Malaysia"},{n:"Singapore",c:"Singapore"},
  {n:"Manila",c:"Philippines"},{n:"Quezon City",c:"Philippines"},{n:"Davao",c:"Philippines"},{n:"Cebu",c:"Philippines"},
  {n:"Bangkok",c:"Thailand"},{n:"Nonthaburi",c:"Thailand"},{n:"Chiang Mai",c:"Thailand"},{n:"Hat Yai",c:"Thailand"},
  {n:"Hanoi",c:"Vietnam"},{n:"Ho Chi Minh City",c:"Vietnam"},{n:"Da Nang",c:"Vietnam"},{n:"Beijing",c:"China"},{n:"Shanghai",c:"China"},{n:"Guangzhou",c:"China"},{n:"Shenzhen",c:"China"},{n:"Hong Kong",c:"China"},{n:"Urumqi",c:"China"},
  {n:"Tokyo",c:"Japan"},{n:"Osaka",c:"Japan"},{n:"Kyoto",c:"Japan"},{n:"Yokohama",c:"Japan"},
  {n:"Seoul",c:"South Korea"},{n:"Busan",c:"South Korea"},{n:"Pyongyang",c:"North Korea"},
  {n:"Kabul",c:"Afghanistan"},{n:"Herat",c:"Afghanistan"},{n:"Kandahar",c:"Afghanistan"},{n:"Mazar-i-Sharif",c:"Afghanistan"},
  {n:"London",c:"United Kingdom"},{n:"Manchester",c:"United Kingdom"},{n:"Birmingham",c:"United Kingdom"},{n:"Leicester",c:"United Kingdom"},{n:"Bradford",c:"United Kingdom"},{n:"Glasgow",c:"United Kingdom"},{n:"Liverpool",c:"United Kingdom"},
  {n:"Paris",c:"France"},{n:"Marseille",c:"France"},{n:"Lyon",c:"France"},{n:"Toulouse",c:"France"},{n:"Nice",c:"France"},
  {n:"Berlin",c:"Germany"},{n:"Munich",c:"Germany"},{n:"Frankfurt",c:"Germany"},{n:"Hamburg",c:"Germany"},{n:"Cologne",c:"Germany"},{n:"Stuttgart",c:"Germany"},{n:"Düsseldorf",c:"Germany"},
  {n:"Madrid",c:"Spain"},{n:"Barcelona",c:"Spain"},{n:"Valencia",c:"Spain"},{n:"Seville",c:"Spain"},{n:"Granada",c:"Spain"},
  {n:"Rome",c:"Italy"},{n:"Milan",c:"Italy"},{n:"Naples",c:"Italy"},{n:"Bologna",c:"Italy"},
  {n:"Amsterdam",c:"Netherlands"},{n:"Rotterdam",c:"Netherlands"},{n:"The Hague",c:"Netherlands"},{n:"Utrecht",c:"Netherlands"},
  {n:"Stockholm",c:"Sweden"},{n:"Gothenburg",c:"Sweden"},{n:"Malmö",c:"Sweden"},{n:"Oslo",c:"Norway"},{n:"Bergen",c:"Norway"},{n:"Copenhagen",c:"Denmark"},{n:"Aarhus",c:"Denmark"},
  {n:"Helsinki",c:"Finland"},{n:"Espoo",c:"Finland"},{n:"Vienna",c:"Austria"},{n:"Graz",c:"Austria"},{n:"Zurich",c:"Switzerland"},{n:"Geneva",c:"Switzerland"},{n:"Bern",c:"Switzerland"},
  {n:"Moscow",c:"Russia"},{n:"Saint Petersburg",c:"Russia"},{n:"Kazan",c:"Russia"},{n:"Makhachkala",c:"Russia"},{n:"Grozny",c:"Russia"},{n:"Ufa",c:"Russia"},
  {n:"Kyiv",c:"Ukraine"},{n:"Istanbul",c:"Turkey"},{n:"Warsaw",c:"Poland"},{n:"Prague",c:"Czech Republic"},{n:"Budapest",c:"Hungary"},{n:"Bucharest",c:"Romania"},{n:"Athens",c:"Greece"},
  {n:"New York",c:"United States"},{n:"Los Angeles",c:"United States"},{n:"Chicago",c:"United States"},{n:"Houston",c:"United States"},{n:"Dallas",c:"United States"},{n:"Detroit",c:"United States"},{n:"Philadelphia",c:"United States"},{n:"Washington DC",c:"United States"},{n:"Miami",c:"United States"},{n:"Atlanta",c:"United States"},{n:"Boston",c:"United States"},{n:"San Francisco",c:"United States"},{n:"Seattle",c:"United States"},{n:"Minneapolis",c:"United States"},{n:"Orlando",c:"United States"},
  {n:"Toronto",c:"Canada"},{n:"Montreal",c:"Canada"},{n:"Vancouver",c:"Canada"},{n:"Calgary",c:"Canada"},{n:"Ottawa",c:"Canada"},{n:"Edmonton",c:"Canada"},
  {n:"Mexico City",c:"Mexico"},{n:"Guadalajara",c:"Mexico"},{n:"Monterrey",c:"Mexico"},
  {n:"São Paulo",c:"Brazil"},{n:"Rio de Janeiro",c:"Brazil"},{n:"Brasília",c:"Brazil"},{n:"Salvador",c:"Brazil"},{n:"Fortaleza",c:"Brazil"},{n:"Curitiba",c:"Brazil"},{n:"Recife",c:"Brazil"},
  {n:"Buenos Aires",c:"Argentina"},{n:"Córdoba",c:"Argentina"},{n:"Rosario",c:"Argentina"},
  {n:"Santiago",c:"Chile"},{n:"Valparaíso",c:"Chile"},{n:"Lima",c:"Peru"},{n:"Bogotá",c:"Colombia"},{n:"Medellín",c:"Colombia"},{n:"Cali",c:"Colombia"},{n:"Caracas",c:"Venezuela"},{n:"Maracaibo",c:"Venezuela"},
  {n:"Nairobi",c:"Kenya"},{n:"Mombasa",c:"Kenya"},{n:"Kisumu",c:"Kenya"},{n:"Lagos",c:"Nigeria"},{n:"Abuja",c:"Nigeria"},{n:"Kano",c:"Nigeria"},{n:"Ibadan",c:"Nigeria"},{n:"Kaduna",c:"Nigeria"},
  {n:"Accra",c:"Ghana"},{n:"Kumasi",c:"Ghana"},{n:"Cape Town",c:"South Africa"},{n:"Johannesburg",c:"South Africa"},{n:"Durban",c:"South Africa"},{n:"Pretoria",c:"South Africa"},
  {n:"Dar es Salaam",c:"Tanzania"},{n:"Dodoma",c:"Tanzania"},{n:"Zanzibar",c:"Tanzania"},{n:"Addis Ababa",c:"Ethiopia"},{n:"Dire Dawa",c:"Ethiopia"},{n:"Kampala",c:"Uganda"},
  {n:"Casablanca",c:"Morocco"},{n:"Rabat",c:"Morocco"},{n:"Marrakech",c:"Morocco"},{n:"Fes",c:"Morocco"},{n:"Tangier",c:"Morocco"},
  {n:"Dakar",c:"Senegal"},{n:"Bamako",c:"Mali"},{n:"Ouagadougou",c:"Burkina Faso"},{n:"Niamey",c:"Niger"},{n:"Nouakchott",c:"Mauritania"},{n:"Conakry",c:"Guinea"},{n:"Abidjan",c:"Ivory Coast"},
  {n:"Sydney",c:"Australia"},{n:"Melbourne",c:"Australia"},{n:"Brisbane",c:"Australia"},{n:"Perth",c:"Australia"},{n:"Adelaide",c:"Australia"},
  {n:"Auckland",c:"New Zealand"},{n:"Wellington",c:"New Zealand"},{n:"Christchurch",c:"New Zealand"},
];

const HADITHS = [
  {ar:"إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",en:"Actions are judged by intentions",ref:"Sahih Bukhari & Muslim"},
  {ar:"خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",en:"The best of you are those who are best to their families",ref:"Sunan Tirmidhi"},
  {ar:"الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",en:"A Muslim is the one from whose tongue and hand people are safe",ref:"Sahih Bukhari"},
  {ar:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",en:"None of you truly believes until he loves for his brother what he loves for himself",ref:"Sahih Bukhari & Muslim"},
  {ar:"الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ",en:"The strong believer is better and more beloved to Allah than the weak believer",ref:"Sahih Muslim"},
  {ar:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",en:"Whoever believes in Allah and the Last Day, let him speak good or remain silent",ref:"Sahih Bukhari & Muslim"},
  {ar:"خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",en:"The best of you is the one who learns the Quran and teaches it",ref:"Sahih Bukhari"},
  {ar:"لَا يَشْكُرُ اللَّهَ مَنْ لَا يَشْكُرُ النَّاسَ",en:"Whoever does not thank people does not thank Allah",ref:"Sunan Abi Dawud"},
  {ar:"يَسِّرُوا وَلَا تُعَسِّرُوا",en:"Make things easy, do not make things difficult",ref:"Sahih Bukhari"},
  {ar:"الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ",en:"The world is a prison for the believer and a paradise for the disbeliever",ref:"Sahih Muslim"},
  {ar:"اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا",en:"Fear Allah wherever you are, and follow a bad deed with a good deed to erase it",ref:"Sunan Tirmidhi"},
  {ar:"لَا تَغْضَبْ وَلَكَ الْجَنَّةُ",en:"Do not get angry and Paradise is yours",ref:"Al-Mu'jam al-Awsat"},
  {ar:"الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ",en:"Modesty does not bring anything except good",ref:"Sahih Bukhari & Muslim"},
  {ar:"أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",en:"The most beloved deeds to Allah are the most consistent, even if small",ref:"Sahih Bukhari & Muslim"},
  {ar:"مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",en:"Whoever treads a path seeking knowledge, Allah will make easy for him the path to Paradise",ref:"Sahih Muslim"},
  {ar:"الْكَيِّسُ مَنْ دَانَ نَفْسَهُ وَعَمِلَ لِمَا بَعْدَ الْمَوْتِ",en:"The wise person is the one who judges himself and works for what comes after death",ref:"Sunan Tirmidhi"},
  {ar:"لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا",en:"Do not consider any act of kindness as insignificant",ref:"Sahih Muslim"},
  {ar:"الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",en:"The believer to another believer is like a building whose parts reinforce each other",ref:"Sahih Bukhari & Muslim"},
  {ar:"َأَفْشُوا السَّلَامَ بَيْنَكُمْ",en:"Spread peace among yourselves",ref:"Sahih Muslim"},
  {ar:"مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",en:"Whoever relieves a believer's distress, Allah will relieve his distress on the Day of Resurrection",ref:"Sahih Muslim"},
  {ar:"إِيَّاكُمْ وَالظَّنَّ فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ",en:"Beware of suspicion, for suspicion is the most false form of speech",ref:"Sahih Bukhari & Muslim"},
  {ar:"لَا يُلْدَغُ الْمُؤْمِنُ مِنْ جُحْرٍ وَاحِدٍ مَرَّتَيْنِ",en:"A believer is not stung from the same hole twice",ref:"Sahih Bukhari"},
  {ar:"الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ",en:"The merciful will be shown mercy by the Most Merciful",ref:"Sunan Tirmidhi"},
  {ar:"طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",en:"Seeking knowledge is an obligation upon every Muslim",ref:"Sunan Ibn Majah"},
  {ar:"الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ",en:"A Muslim is the brother of another Muslim, he does not wrong him nor forsake him",ref:"Sahih Bukhari"},
  {ar:"كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ",en:"Every joint of the body should give charity each day",ref:"Sahih Bukhari & Muslim"},
  {ar:"الْبَيِّعَانِ بِالْخِيَارِ مَا لَمْ يَتَفَرَّقَا",en:"The two parties of a transaction have a choice until they separate",ref:"Sahih Bukhari & Muslim"},
  {ar:"بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ",en:"Islam is built upon five pillars",ref:"Sahih Bukhari & Muslim"},
  {ar:"لَا ضَرَرَ وَلَا ضِرَارَ",en:"There should be neither harming nor reciprocating harm",ref:"Sunan Ibn Majah"},
  {ar:"إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ",en:"When a person dies, his deeds cease except from three sources",ref:"Sahih Muslim"},
];

const TRANSLATIONS = {
  en: {
    title:"Prayer Times",subtitle:"Muslim Prayer Times Worldwide",
    gps_btn:"Detect My Location",city_placeholder:"City",
    fetch_btn:"Get Times",next_prayer:"Next Prayer",
    fajr:"Fajr",sunrise:"Sunrise",dhuhr:"Dhuhr",asr:"Asr",maghrib:"Maghrib",isha:"Isha",
    test_athan:"Test Athan",buy_coffee:"Buy Me a Coffee",
    footer:"Powered by Aladhan API · Al-Minshawi Athan",
    copied:"Instapay copied! 💚",athan_playing:"🔊 Athan is playing...",
    select_location:"Please enter a city and select a country",
    detecting:"Detecting location...",location_failed:"Location detection failed. Please enter manually.",
    fetching:"Fetching prayer times...",error_fetch:"Could not fetch prayer times. Check city and country.",
    next_day:"Tomorrow",
    ayah_title:"Ayah of the Day",
    hadith_title:"Hadith of the Day",
    location_title:"Your Location",
    prayers_title:"Prayer Times",
  },
  ar: {
    title:"مواقيت الصلاة",subtitle:"مواقيت الصلاة للمسلمين حول العالم",
    gps_btn:"تحديد موقعي",city_placeholder:"المدينة",
    fetch_btn:"عرض المواقيت",next_prayer:"الصلاة القادمة",
    fajr:"الفجر",sunrise:"الشروق",dhuhr:"الظهر",asr:"العصر",maghrib:"المغرب",isha:"العشاء",
    test_athan:"اختبار الأذان",buy_coffee:"اشتر لي قهوة",
    footer:"مدعوم من Aladhan API · أذان المشناوي",
    copied:"تم النسخ! 💚",athan_playing:"🔊 جاري تشغيل الأذان...",
    select_location:"يرجى إدخال المدينة واختيار الدولة",
    detecting:"جاري تحديد الموقع...",location_failed:"فشل تحديد الموقع. يرجى الإدخال يدويًا.",
    fetching:"جاري جلب مواقيت الصلاة...",error_fetch:"تعذر جلب المواقيت. تحقق من المدينة والدولة.",
    next_day:"غداً",
    ayah_title:"آية اليوم",
    hadith_title:"حديث اليوم",
    location_title:"موقعك",
    prayers_title:"أوقات الصلاة",
  },
};

const ATHAN_URL = "https://www.islamcan.com/audio/athan/azan1.mp3";
const ALADHAN_BASE = "https://api.aladhan.com/v1";
const METHOD = 3;

const PRAYER_ORDER = ["Fajr","Dhuhr","Asr","Maghrib","Isha"];
const PRAYER_KEYS = ["Fajr","Sunrise","Dhuhr","Asr","Maghrib","Isha"];

let state = {
  city: localStorage.getItem("pt_city") || "",
  country: localStorage.getItem("pt_country") || "",
  lang: localStorage.getItem("pt_lang") || "en",
  prayers: null,
  nextPrayer: null,
  athanPlayed: {},
  today: null,
  autocompleteIdx: -1,
};

let athanAudio = null;
let countdownInterval = null;
let clockInterval = null;
let athanCheckInterval = null;

function init() {
  populateCountries();
  restoreState();
  setupEventListeners();
  setLanguage(state.lang);
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
  loadAyahOfDay();
  loadHadithOfDay();
  if (state.city && state.country) {
    fetchPrayerTimes(state.city, state.country);
  } else {
    autoDetectLocation();
  }
}

function autoDetectLocation() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const {latitude,longitude} = pos.coords;
      fetchByCoords(latitude,longitude);
    },
    () => {},
    {enableHighAccuracy:true,timeout:8000}
  );
}

function populateCountries() {
  const s = document.getElementById("countrySelect");
  s.innerHTML = '<option value="">Country</option>';
  COUNTRIES.forEach(c => {
    const o = document.createElement("option");
    o.value = c; o.textContent = c; s.appendChild(o);
  });
}

function restoreState() {
  if (state.city) document.getElementById("cityInput").value = state.city;
  if (state.country) document.getElementById("countrySelect").value = state.country;
  if (state.lang === "ar") document.getElementById("langToggle").checked = true;
}

function setupEventListeners() {
  document.getElementById("gpsBtn").addEventListener("click",detectLocation);
  document.getElementById("fetchBtn").addEventListener("click",handleFetch);
  document.getElementById("langToggle").addEventListener("change",e => setLanguage(e.target.checked?"ar":"en"));
  document.getElementById("testAthanBtn").addEventListener("click",playAthan);
  document.getElementById("coffeeBtn").addEventListener("click",copyInstapay);

  const cityInput = document.getElementById("cityInput");
  cityInput.addEventListener("input",handleCityInput);
  cityInput.addEventListener("keydown",handleCityKeydown);
  cityInput.addEventListener("blur",() => setTimeout(() => hideAutocomplete(),200));
  cityInput.addEventListener("focus",() => { if (cityInput.value.length >= 1) showAutocomplete(cityInput.value); });

  document.addEventListener("click",e => {
    if (!e.target.closest(".autocomplete-wrap")) hideAutocomplete();
  });
}

function handleCityInput() {
  const val = this.value.trim();
  if (val.length >= 1) {
    showAutocomplete(val);
  } else {
    hideAutocomplete();
  }
}

function handleCityKeydown(e) {
  const list = document.getElementById("autocompleteList");
  const items = list.querySelectorAll(".autocomplete-item");
  if (!list.classList.contains("show") || !items.length) {
    if (e.key === "Enter") handleFetch();
    return;
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    state.autocompleteIdx = Math.min(state.autocompleteIdx + 1, items.length - 1);
    updateAutocompleteActive(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    state.autocompleteIdx = Math.max(state.autocompleteIdx - 1, -1);
    updateAutocompleteActive(items);
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (state.autocompleteIdx >= 0 && items[state.autocompleteIdx]) {
      items[state.autocompleteIdx].click();
    } else {
      handleFetch();
    }
  } else if (e.key === "Escape") {
    hideAutocomplete();
  }
}

function updateAutocompleteActive(items) {
  items.forEach((el,i) => el.classList.toggle("active",i === state.autocompleteIdx));
}

function showAutocomplete(query) {
  const list = document.getElementById("autocompleteList");
  const q = query.toLowerCase();
  const matches = CITIES
    .filter(c => c.n.toLowerCase().startsWith(q))
    .slice(0,10);
  if (!matches.length) { hideAutocomplete(); return; }
  list.innerHTML = matches.map((c,i) =>
    `<div class="autocomplete-item" data-city="${c.n}" data-country="${c.c}">
      <span class="city-name">${c.n}</span>
      <span class="city-country">${c.c}</span>
    </div>`
  ).join("");
  list.classList.add("show");
  state.autocompleteIdx = -1;
  list.querySelectorAll(".autocomplete-item").forEach(el => {
    el.addEventListener("click",() => {
      document.getElementById("cityInput").value = el.dataset.city;
      document.getElementById("countrySelect").value = el.dataset.country;
      state.city = el.dataset.city;
      state.country = el.dataset.country;
      localStorage.setItem("pt_city",state.city);
      localStorage.setItem("pt_country",state.country);
      hideAutocomplete();
      fetchPrayerTimes(state.city,state.country);
    });
  });
}

function hideAutocomplete() {
  document.getElementById("autocompleteList").classList.remove("show");
  state.autocompleteIdx = -1;
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("pt_lang",lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key]) el.textContent = TRANSLATIONS[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (TRANSLATIONS[lang][key]) el.placeholder = TRANSLATIONS[lang][key];
  });
  loadHadithOfDay();
}

function detectLocation() {
  if (!navigator.geolocation) { showToast(TRANSLATIONS[state.lang].location_failed); return; }
  showToast(TRANSLATIONS[state.lang].detecting);
  navigator.geolocation.getCurrentPosition(
    pos => fetchByCoords(pos.coords.latitude,pos.coords.longitude),
    () => showToast(TRANSLATIONS[state.lang].location_failed),
    {enableHighAccuracy:true,timeout:10000}
  );
}

async function fetchByCoords(lat,lng) {
  showToast(TRANSLATIONS[state.lang].fetching);
  setLoading(true);
  try {
    const r = await fetch(`${ALADHAN_BASE}/timingsByLatLng?lat=${lat}&lng=${lng}&method=${METHOD}`);
    const d = await r.json();
    if (d.code === 200) {
      processPrayerData(d);
      state.city = ""; state.country = "";
      localStorage.removeItem("pt_city"); localStorage.removeItem("pt_country");
      document.getElementById("cityInput").value = "";
      document.getElementById("countrySelect").value = "";
      document.getElementById("locationDisplay").textContent = d.data.meta.timezone;
    } else showToast(TRANSLATIONS[state.lang].error_fetch);
  } catch { showToast(TRANSLATIONS[state.lang].error_fetch); }
  finally { setLoading(false); }
}

async function handleFetch() {
  const city = document.getElementById("cityInput").value.trim();
  const country = document.getElementById("countrySelect").value;
  if (!city || !country) { showToast(TRANSLATIONS[state.lang].select_location); return; }
  state.city = city; state.country = country;
  localStorage.setItem("pt_city",city); localStorage.setItem("pt_country",country);
  await fetchPrayerTimes(city,country);
}

async function fetchPrayerTimes(city,country) {
  showToast(TRANSLATIONS[state.lang].fetching);
  setLoading(true);
  try {
    const r = await fetch(`${ALADHAN_BASE}/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${METHOD}`);
    const d = await r.json();
    if (d.code === 200) {
      processPrayerData(d);
      document.getElementById("locationDisplay").textContent = `${city}, ${country}`;
    } else showToast(TRANSLATIONS[state.lang].error_fetch);
  } catch { showToast(TRANSLATIONS[state.lang].error_fetch); }
  finally { setLoading(false); }
}

function processPrayerData(data) {
  const timings = data.data.timings;
  const date = data.data.date;
  state.today = date.gregorian.date;
  state.athanPlayed = {};
  const prayers = {};
  PRAYER_KEYS.forEach(k => { prayers[k] = formatTime(timings[k]); });
  state.prayers = prayers;
  displayPrayers(prayers);
  updateNextPrayer(prayers);
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(() => updateNextPrayer(prayers),1000);
  if (athanCheckInterval) clearInterval(athanCheckInterval);
  athanCheckInterval = setInterval(() => checkAthan(prayers),10000);
  document.getElementById("currentDate").textContent = date.readable;
  setTimeout(() => checkAthan(prayers),1000);
}

function formatTime(t) {
  const [h,m] = t.split(":").map(Number);
  const p = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${String(m).padStart(2,"0")} ${p}`;
}

function displayPrayers(p) {
  PRAYER_KEYS.forEach(k => {
    const el = document.getElementById(`prayer-${k.toLowerCase()}`);
    if (el) el.textContent = p[k];
  });
}

function parseTimeToMinutes(t) {
  const [time,p] = t.split(" ");
  let [h,m] = time.split(":").map(Number);
  if (p === "PM" && h !== 12) h += 12;
  if (p === "AM" && h === 12) h = 0;
  return [h,m];
}

function updateNextPrayer(prayers) {
  if (!state.prayers) return;
  const now = new Date();
  const curMin = now.getHours() * 60 + now.getMinutes();
  const prayerMin = {};
  PRAYER_ORDER.forEach(k => {
    const [h,m] = parseTimeToMinutes(state.prayers[k]);
    prayerMin[k] = h * 60 + m;
  });
  let nextKey = null, nextTime = null;
  for (const k of PRAYER_ORDER) {
    if (prayerMin[k] > curMin) { nextKey = k; nextTime = prayerMin[k]; break; }
  }
  if (!nextKey) {
    nextKey = "Fajr"; nextTime = prayerMin["Fajr"] + 1440;
    document.getElementById("nextPrayerName").textContent =
      TRANSLATIONS[state.lang].next_day + " " + TRANSLATIONS[state.lang][nextKey.toLowerCase()];
  } else {
    document.getElementById("nextPrayerName").textContent = TRANSLATIONS[state.lang][nextKey.toLowerCase()];
  }
  state.nextPrayer = nextKey.toLowerCase();
  const diffMin = nextTime - curMin;
  const diffSec = Math.round(diffMin * 60 - now.getSeconds());
  if (diffSec <= 0) document.getElementById("nextPrayerCountdown").textContent = "00:00:00";
  else {
    const hh = Math.floor(diffSec / 3600);
    const mm = Math.floor((diffSec % 3600) / 60);
    const ss = diffSec % 60;
    document.getElementById("nextPrayerCountdown").textContent =
      `${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")}:${String(ss).padStart(2,"0")}`;
  }
  document.getElementById("nextPrayerTime").textContent = state.prayers[nextKey] || "";
  highlightActivePrayer(nextKey,curMin,prayerMin);
  updateProgressRing(nextTime,curMin,prayerMin);
}

function highlightActivePrayer(nextKey,curMin,prayerMin) {
  document.querySelectorAll(".prayer-card").forEach(c => c.classList.remove("active","current"));
  for (const k of PRAYER_ORDER) {
    if (k === nextKey) {
      document.querySelector(`[data-prayer="${k}"]`)?.classList.add("active");
      break;
    }
  }
  for (const k of PRAYER_ORDER) {
    const pm = prayerMin[k];
    if (curMin >= pm - 1 && curMin < pm + 30) {
      document.querySelector(`[data-prayer="${k}"]`)?.classList.add("current");
    }
  }
}

function updateProgressRing(nextTime,curMin,prayerMin) {
  const circle = document.getElementById("progressCircle");
  if (!circle) return;
  let prevTime = 0;
  for (const k of PRAYER_ORDER) {
    if (prayerMin[k] >= nextTime) break;
    prevTime = prayerMin[k];
  }
  if (!prevTime) prevTime = prayerMin["Isha"] - 1440;
  const total = nextTime - prevTime;
  const elapsed = curMin - prevTime;
  const pct = Math.min(Math.max(elapsed / total,0),1);
  const circ = 2 * Math.PI * 45;
  circle.style.strokeDasharray = circ;
  circle.style.strokeDashoffset = circ * (1 - pct);
}

function checkAthan(prayers) {
  const now = new Date();
  const curMin = now.getHours() * 60 + now.getMinutes();
  for (const k of PRAYER_ORDER) {
    const [h,m] = parseTimeToMinutes(prayers[k]);
    const pm = h * 60 + m;
    if (Math.abs(curMin - pm) <= 1) {
      const key = `${state.today || now.toISOString().split("T")[0]}-${k}`;
      if (!state.athanPlayed[key]) { state.athanPlayed[key] = true; playAthan(); }
      break;
    }
  }
}

function playAthan() {
  if (athanAudio) { athanAudio.pause(); athanAudio.currentTime = 0; }
  athanAudio = new Audio(ATHAN_URL);
  athanAudio.play().catch(() => {});
  showToast(TRANSLATIONS[state.lang].athan_playing);
}

function copyInstapay() {
  const text = "mustafaengineering@instapay";
  navigator.clipboard.writeText(text).then(() => showToast(TRANSLATIONS[state.lang].copied)).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); document.body.removeChild(ta);
    showToast(TRANSLATIONS[state.lang].copied);
  });
}

function updateClock() {
  const now = new Date();
  document.getElementById("currentTime").textContent = now.toLocaleTimeString("en-US",{hour12:false});
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"),3000);
}

function setLoading(v) {
  document.querySelectorAll("button").forEach(b => { b.disabled = v; b.classList.toggle("loading",v); });
}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(),0,0);
  return Math.floor((now - start) / 86400000);
}

function loadHadithOfDay() {
  const idx = getDayOfYear() % HADITHS.length;
  const h = HADITHS[idx];
  document.getElementById("hadithArabic").textContent = h.ar;
  document.getElementById("hadithTranslation").textContent = h.en;
  document.getElementById("hadithReference").textContent = `— ${h.ref}`;
}

async function loadAyahOfDay() {
  const day = getDayOfYear();
  const totalAyahs = 6236;
  const ayahNum = (day % totalAyahs) + 1;
  try {
    const [arRes,enRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/ayah/${ayahNum}`),
      fetch(`https://api.alquran.cloud/v1/ayah/${ayahNum}/en.asad`),
    ]);
    const ar = await arRes.json();
    const en = await enRes.json();
    if (ar.code === 200 && en.code === 200) {
      document.getElementById("ayahArabic").textContent = ar.data.text;
      document.getElementById("ayahTranslation").textContent = `"${en.data.text}"`;
      const surah = ar.data.surah;
      const ayahInSurah = ar.data.numberInSurah;
      document.getElementById("ayahReference").textContent =
        `${surah.englishName} (${surah.name}) — ${ayahInSurah}:${surah.numberOfAyahs >= ayahInSurah ? ayahInSurah : '?'}`;
    }
  } catch {}
}

document.addEventListener("DOMContentLoaded",init);
