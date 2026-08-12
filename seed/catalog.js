/**
 * ELIMUmaterial - Master catalog of Kenyan universities, faculties, courses, and units.
 * Curated from public information about Kenyan public and private universities.
 * Unit counts intentionally match real semester loads (nursing ≈ 9 units/semester,
 * arts & sociology ≈ 7 units, engineering ≈ 8 units, etc.).
 */

const universities = [
  { id: 'uon',  shortName: 'UoN',   name: 'University of Nairobi',                 location: 'Nairobi' },
  { id: 'ku',   shortName: 'KU',    name: 'Kenyatta University',                   location: 'Nairobi' },
  { id: 'jkuat',shortName: 'JKUAT', name: 'Jomo Kenyatta University of Agriculture and Technology', location: 'Kiambu' },
  { id: 'moi',  shortName: 'MU',    name: 'Moi University',                        location: 'Eldoret' },
  { id: 'egerton', shortName: 'EU', name: 'Egerton University',                    location: 'Nakuru' },
  { id: 'mmust',shortName: 'MMUST', name: 'Masinde Muliro University of Science and Technology', location: 'Kakamega' },
  { id: 'mku',  shortName: 'MKU',   name: 'Mount Kenya University',                location: 'Thika' },
  { id: 'daystar', shortName: 'DU', name: 'Daystar University',                    location: 'Nairobi' },
  { id: 'strathmore', shortName: 'SU', name: 'Strathmore University',              location: 'Nairobi' },
  { id: 'usiu', shortName: 'USIU',  name: 'United States International University Africa', location: 'Nairobi' },
  { id: 'cuea', shortName: 'CUEA',  name: 'Catholic University of Eastern Africa', location: 'Nairobi' },
  { id: 'kabarak', shortName: 'KABU', name: 'Kabarak University',                  location: 'Nakuru' },
  { id: 'maseno', shortName: 'MSU', name: 'Maseno University',                     location: 'Kisumu' },
  { id: 'tuk',  shortName: 'TUK',   name: 'Technical University of Kenya',         location: 'Nairobi' },
  { id: 'tum',  shortName: 'TUM',   name: 'Technical University of Mombasa',       location: 'Mombasa' },
  { id: 'dkut', shortName: 'DeKUT', name: 'Dedan Kimathi University of Technology',location: 'Nyeri' },
  { id: 'mmarau',shortName: 'MMARAU',name:'Maasai Mara University',                location: 'Narok' },
  { id: 'chuka',shortName: 'CU',    name: 'Chuka University',                      location: 'Chuka' },
  { id: 'karatina', shortName: 'KarU', name: 'Karatina University',                location: 'Karatina' },
  { id: 'meru', shortName: 'MerU',  name: 'Meru University of Science and Technology', location: 'Meru' },
  { id: 'pu',   shortName: 'PU',    name: 'Pwani University',                      location: 'Kilifi' },
  { id: 'seku', shortName: 'SEKU',  name: 'South Eastern Kenya University',        location: 'Kitui' },
  { id: 'kyu',  shortName: 'KyU',   name: 'Kirinyaga University',                  location: 'Kerugoya' },
  { id: 'mmu',  shortName: 'MMU',   name: 'Multimedia University of Kenya',        location: 'Nairobi' },
  { id: 'kemu', shortName: 'KeMU',  name: 'Kenya Methodist University',            location: 'Meru' },
  { id: 'africa-nazarene', shortName: 'ANU', name: 'Africa Nazarene University',   location: 'Nairobi' },
  { id: 'riara', shortName: 'RU',   name: 'Riara University',                      location: 'Nairobi' },
  { id: 'zetech', shortName: 'ZU',  name: 'Zetech University',                     location: 'Nairobi' },
  { id: 'kabianga', shortName: 'UoK', name: 'University of Kabianga',              location: 'Kericho' },
  { id: 'laikipia', shortName: 'LU',name: 'Laikipia University',                   location: 'Nyahururu' }
];

const faculties = [
  { id: 'fac-med',  name: 'Faculty of Health Sciences & Medicine' },
  { id: 'fac-eng',  name: 'Faculty of Engineering' },
  { id: 'fac-sci',  name: 'Faculty of Science' },
  { id: 'fac-ict',  name: 'Faculty of Computing & Information Technology' },
  { id: 'fac-biz',  name: 'Faculty of Business & Economics' },
  { id: 'fac-edu',  name: 'Faculty of Education' },
  { id: 'fac-ssh',  name: 'Faculty of Social Sciences & Humanities' },
  { id: 'fac-law',  name: 'Faculty of Law' },
  { id: 'fac-agri', name: 'Faculty of Agriculture & Veterinary Sciences' },
  { id: 'fac-arch', name: 'Faculty of Architecture & Built Environment' },
  { id: 'fac-arts', name: 'Faculty of Arts, Design & Communication' },
  { id: 'fac-env',  name: 'Faculty of Environmental Studies' }
];

// Helper to build units quickly
const U = (code, name, pages = 22) => ({ code, name, pages });

const courses = [
  // ============= HEALTH SCIENCES =============
  {
    id: 'bsn', code: 'BSN', name: 'Bachelor of Science in Nursing', facultyId: 'fac-med', duration: '4 years',
    units: [
      U('NUR101','Human Anatomy & Physiology I'),
      U('NUR102','Fundamentals of Nursing Practice'),
      U('NUR103','Medical Microbiology & Parasitology'),
      U('NUR104','Biochemistry for Nurses'),
      U('NUR105','Community Health Nursing I'),
      U('NUR106','Pharmacology & Drug Administration'),
      U('NUR107','Medical–Surgical Nursing'),
      U('NUR108','Maternal & Child Health Nursing'),
      U('NUR109','Mental Health & Psychiatric Nursing')
    ]
  },
  {
    id: 'mbchb', code: 'MBChB', name: 'Bachelor of Medicine & Bachelor of Surgery', facultyId: 'fac-med', duration: '6 years',
    units: [
      U('MED101','Gross Human Anatomy'), U('MED102','Medical Physiology'),
      U('MED103','Medical Biochemistry'), U('MED104','Histology & Embryology'),
      U('MED105','Pathology'), U('MED106','Microbiology & Immunology'),
      U('MED107','Pharmacology'), U('MED108','Community Medicine'),
      U('MED109','Behavioural Sciences'), U('MED110','Medical Ethics')
    ]
  },
  {
    id: 'pharm', code: 'BPharm', name: 'Bachelor of Pharmacy', facultyId: 'fac-med', duration: '5 years',
    units: [
      U('PHA101','Pharmaceutical Chemistry I'), U('PHA102','Pharmaceutics I'),
      U('PHA103','Pharmacognosy'), U('PHA104','Human Anatomy & Physiology'),
      U('PHA105','Pharmacology I'), U('PHA106','Biopharmaceutics'),
      U('PHA107','Clinical Pharmacy'), U('PHA108','Pharmaceutical Microbiology')
    ]
  },
  {
    id: 'clinmed', code: 'BClinMed', name: 'Bachelor of Clinical Medicine', facultyId: 'fac-med', duration: '4 years',
    units: [
      U('CLM101','Applied Human Anatomy'), U('CLM102','Physiology'),
      U('CLM103','Clinical Pathology'), U('CLM104','Internal Medicine'),
      U('CLM105','Paediatrics'), U('CLM106','Obstetrics & Gynaecology'),
      U('CLM107','General Surgery'), U('CLM108','Public Health')
    ]
  },
  {
    id: 'phealth', code: 'BPH', name: 'Bachelor of Public Health', facultyId: 'fac-med', duration: '4 years',
    units: [
      U('PBH101','Epidemiology'), U('PBH102','Biostatistics for Health'),
      U('PBH103','Environmental Health'), U('PBH104','Health Promotion & Education'),
      U('PBH105','Occupational Health & Safety'), U('PBH106','Health Systems Management'),
      U('PBH107','Global Health'), U('PBH108','Nutrition & Public Health')
    ]
  },

  // ============= ENGINEERING =============
  {
    id: 'bce', code: 'BCE', name: 'Bachelor of Science in Civil Engineering', facultyId: 'fac-eng', duration: '5 years',
    units: [
      U('CIV101','Engineering Mathematics I'), U('CIV102','Engineering Drawing'),
      U('CIV103','Mechanics of Materials'), U('CIV104','Fluid Mechanics'),
      U('CIV105','Structural Analysis'), U('CIV106','Geotechnical Engineering'),
      U('CIV107','Highway Engineering'), U('CIV108','Reinforced Concrete Design')
    ]
  },
  {
    id: 'bee', code: 'BEE', name: 'Bachelor of Science in Electrical & Electronic Engineering', facultyId: 'fac-eng', duration: '5 years',
    units: [
      U('EEE101','Circuit Analysis'), U('EEE102','Electromagnetic Fields'),
      U('EEE103','Digital Electronics'), U('EEE104','Power Systems'),
      U('EEE105','Control Systems'), U('EEE106','Signals & Systems'),
      U('EEE107','Microprocessors'), U('EEE108','Communication Systems')
    ]
  },
  {
    id: 'bme', code: 'BME', name: 'Bachelor of Science in Mechanical Engineering', facultyId: 'fac-eng', duration: '5 years',
    units: [
      U('MEC101','Thermodynamics'), U('MEC102','Fluid Mechanics'),
      U('MEC103','Machine Design'), U('MEC104','Manufacturing Processes'),
      U('MEC105','Materials Science'), U('MEC106','Dynamics of Machines'),
      U('MEC107','Heat Transfer'), U('MEC108','Mechatronics')
    ]
  },
  {
    id: 'bche', code: 'BChE', name: 'Bachelor of Science in Chemical Engineering', facultyId: 'fac-eng', duration: '5 years',
    units: [
      U('CHE101','Chemical Engineering Thermodynamics'), U('CHE102','Transport Phenomena'),
      U('CHE103','Unit Operations'), U('CHE104','Chemical Reaction Engineering'),
      U('CHE105','Process Control'), U('CHE106','Plant Design'),
      U('CHE107','Industrial Safety'), U('CHE108','Biochemical Engineering')
    ]
  },

  // ============= COMPUTING & IT =============
  {
    id: 'bcs', code: 'BSC-CS', name: 'Bachelor of Science in Computer Science', facultyId: 'fac-ict', duration: '4 years',
    units: [
      U('CSC101','Introduction to Programming (Python)'),
      U('CSC102','Discrete Mathematics'),
      U('CSC103','Data Structures & Algorithms'),
      U('CSC104','Computer Organization & Architecture'),
      U('CSC105','Object-Oriented Programming (Java)'),
      U('CSC106','Database Systems'),
      U('CSC107','Operating Systems'),
      U('CSC108','Software Engineering'),
      U('CSC109','Computer Networks'),
      U('CSC110','Artificial Intelligence')
    ]
  },
  {
    id: 'bit', code: 'BSC-IT', name: 'Bachelor of Science in Information Technology', facultyId: 'fac-ict', duration: '4 years',
    units: [
      U('BIT101','IT Fundamentals'), U('BIT102','Web Development'),
      U('BIT103','Systems Analysis & Design'), U('BIT104','Database Management'),
      U('BIT105','Networking Essentials'), U('BIT106','Cyber Security'),
      U('BIT107','Cloud Computing'), U('BIT108','Mobile App Development'),
      U('BIT109','IT Project Management')
    ]
  },
  {
    id: 'bse', code: 'BSE', name: 'Bachelor of Science in Software Engineering', facultyId: 'fac-ict', duration: '4 years',
    units: [
      U('SEN101','Software Requirements Engineering'),
      U('SEN102','Software Design & Architecture'),
      U('SEN103','Human–Computer Interaction'),
      U('SEN104','Software Testing & QA'),
      U('SEN105','Agile & DevOps'),
      U('SEN106','Enterprise Application Development'),
      U('SEN107','Web Systems & Technologies'),
      U('SEN108','Software Project Management')
    ]
  },
  {
    id: 'bds', code: 'BDS', name: 'Bachelor of Science in Data Science & Analytics', facultyId: 'fac-ict', duration: '4 years',
    units: [
      U('DSC101','Foundations of Data Science'),
      U('DSC102','Statistical Computing with R'),
      U('DSC103','Machine Learning'),
      U('DSC104','Data Visualization'),
      U('DSC105','Big Data Technologies'),
      U('DSC106','Deep Learning'),
      U('DSC107','Data Ethics & Governance'),
      U('DSC108','Business Analytics')
    ]
  },
  {
    id: 'bcyber', code: 'BCyber', name: 'Bachelor of Science in Cyber Security', facultyId: 'fac-ict', duration: '4 years',
    units: [
      U('CYB101','Introduction to Cyber Security'),
      U('CYB102','Cryptography'),
      U('CYB103','Network Security'),
      U('CYB104','Ethical Hacking & Penetration Testing'),
      U('CYB105','Digital Forensics'),
      U('CYB106','Security Governance & Risk'),
      U('CYB107','Cloud & IoT Security'),
      U('CYB108','Incident Response')
    ]
  },

  // ============= BUSINESS =============
  {
    id: 'bcom', code: 'BCom', name: 'Bachelor of Commerce', facultyId: 'fac-biz', duration: '4 years',
    units: [
      U('BCM101','Principles of Accounting'), U('BCM102','Business Law'),
      U('BCM103','Microeconomics'), U('BCM104','Business Communication'),
      U('BCM105','Principles of Management'), U('BCM106','Business Statistics'),
      U('BCM107','Marketing Principles'), U('BCM108','Financial Management')
    ]
  },
  {
    id: 'bba', code: 'BBA', name: 'Bachelor of Business Administration', facultyId: 'fac-biz', duration: '4 years',
    units: [
      U('BBA101','Introduction to Business'), U('BBA102','Organizational Behaviour'),
      U('BBA103','Human Resource Management'), U('BBA104','Operations Management'),
      U('BBA105','Strategic Management'), U('BBA106','Entrepreneurship'),
      U('BBA107','Corporate Finance'), U('BBA108','International Business')
    ]
  },
  {
    id: 'becon', code: 'BEcon', name: 'Bachelor of Arts in Economics', facultyId: 'fac-biz', duration: '4 years',
    units: [
      U('ECO101','Microeconomic Theory'), U('ECO102','Macroeconomic Theory'),
      U('ECO103','Mathematics for Economists'), U('ECO104','Econometrics'),
      U('ECO105','Development Economics'), U('ECO106','Public Finance'),
      U('ECO107','International Trade')
    ]
  },
  {
    id: 'bacc', code: 'BAcc', name: 'Bachelor of Science in Accounting & Finance', facultyId: 'fac-biz', duration: '4 years',
    units: [
      U('ACC101','Financial Accounting I'), U('ACC102','Cost Accounting'),
      U('ACC103','Auditing & Assurance'), U('ACC104','Taxation'),
      U('ACC105','Corporate Reporting'), U('ACC106','Management Accounting'),
      U('ACC107','Public Sector Accounting'), U('ACC108','Forensic Accounting')
    ]
  },

  // ============= EDUCATION =============
  {
    id: 'bed-arts', code: 'BEd-Arts', name: 'Bachelor of Education (Arts)', facultyId: 'fac-edu', duration: '4 years',
    units: [
      U('EDA101','Foundations of Education'), U('EDA102','Educational Psychology'),
      U('EDA103','Curriculum Studies'), U('EDA104','Sociology of Education'),
      U('EDA105','Teaching Methods'), U('EDA106','Educational Technology'),
      U('EDA107','Guidance & Counselling'), U('EDA108','Teaching Practice')
    ]
  },
  {
    id: 'bed-sci', code: 'BEd-Sci', name: 'Bachelor of Education (Science)', facultyId: 'fac-edu', duration: '4 years',
    units: [
      U('EDS101','General Chemistry for Educators'),
      U('EDS102','General Physics for Educators'),
      U('EDS103','General Biology for Educators'),
      U('EDS104','Mathematics Methods'),
      U('EDS105','Science Pedagogy'),
      U('EDS106','Laboratory Techniques'),
      U('EDS107','Assessment & Evaluation'),
      U('EDS108','Educational Research Methods')
    ]
  },
  {
    id: 'bece', code: 'BECE', name: 'Bachelor of Early Childhood Development & Education', facultyId: 'fac-edu', duration: '4 years',
    units: [
      U('ECD101','Child Growth & Development'),
      U('ECD102','ECD Curriculum'),
      U('ECD103','Play & Learning'),
      U('ECD104','Language & Literacy'),
      U('ECD105','ECD Health & Nutrition'),
      U('ECD106','Parenting & Community'),
      U('ECD107','Special Needs Education')
    ]
  },

  // ============= SOCIAL SCIENCES & HUMANITIES =============
  {
    id: 'bsoc', code: 'BA-Soc', name: 'Bachelor of Arts in Sociology', facultyId: 'fac-ssh', duration: '4 years',
    units: [
      U('SOC101','Introduction to Sociology'),
      U('SOC102','Social Theory'),
      U('SOC103','Research Methods in Sociology'),
      U('SOC104','Rural & Urban Sociology'),
      U('SOC105','Social Problems in Africa'),
      U('SOC106','Sociology of Development'),
      U('SOC107','Sociology of the Family')
    ]
  },
  {
    id: 'bpsy', code: 'BA-Psy', name: 'Bachelor of Arts in Psychology', facultyId: 'fac-ssh', duration: '4 years',
    units: [
      U('PSY101','Introduction to Psychology'),
      U('PSY102','Developmental Psychology'),
      U('PSY103','Cognitive Psychology'),
      U('PSY104','Social Psychology'),
      U('PSY105','Abnormal Psychology'),
      U('PSY106','Counselling Psychology'),
      U('PSY107','Research Methods in Psychology')
    ]
  },
  {
    id: 'bhist', code: 'BA-Hist', name: 'Bachelor of Arts in History', facultyId: 'fac-ssh', duration: '4 years',
    units: [
      U('HIS101','Introduction to History'),
      U('HIS102','History of Kenya'),
      U('HIS103','History of Africa'),
      U('HIS104','World History'),
      U('HIS105','Historiography'),
      U('HIS106','Political History of East Africa'),
      U('HIS107','Economic History')
    ]
  },
  {
    id: 'bpol', code: 'BA-PolSci', name: 'Bachelor of Arts in Political Science', facultyId: 'fac-ssh', duration: '4 years',
    units: [
      U('POL101','Introduction to Political Science'),
      U('POL102','Kenyan Government & Politics'),
      U('POL103','International Relations'),
      U('POL104','Political Theory'),
      U('POL105','Public Policy Analysis'),
      U('POL106','Comparative Politics'),
      U('POL107','Peace & Conflict Studies')
    ]
  },
  {
    id: 'bcomm', code: 'BA-Comm', name: 'Bachelor of Arts in Communication & Journalism', facultyId: 'fac-arts', duration: '4 years',
    units: [
      U('COM101','Introduction to Mass Communication'),
      U('COM102','News Writing & Reporting'),
      U('COM103','Media Law & Ethics'),
      U('COM104','Broadcast Journalism'),
      U('COM105','Digital Media Production'),
      U('COM106','Public Relations'),
      U('COM107','Media Research')
    ]
  },

  // ============= LAW =============
  {
    id: 'llb', code: 'LLB', name: 'Bachelor of Laws (LLB)', facultyId: 'fac-law', duration: '4 years',
    units: [
      U('LAW101','Legal Systems & Methods'),
      U('LAW102','Constitutional Law'),
      U('LAW103','Criminal Law'),
      U('LAW104','Law of Contract'),
      U('LAW105','Law of Tort'),
      U('LAW106','Family Law'),
      U('LAW107','Property Law'),
      U('LAW108','Administrative Law'),
      U('LAW109','Public International Law')
    ]
  },

  // ============= SCIENCE =============
  {
    id: 'bmath', code: 'BSc-Math', name: 'Bachelor of Science in Mathematics', facultyId: 'fac-sci', duration: '4 years',
    units: [
      U('MAT101','Calculus I'), U('MAT102','Linear Algebra'),
      U('MAT103','Discrete Mathematics'), U('MAT104','Real Analysis'),
      U('MAT105','Abstract Algebra'), U('MAT106','Probability & Statistics'),
      U('MAT107','Numerical Methods'), U('MAT108','Differential Equations')
    ]
  },
  {
    id: 'bphy', code: 'BSc-Phy', name: 'Bachelor of Science in Physics', facultyId: 'fac-sci', duration: '4 years',
    units: [
      U('PHY101','Classical Mechanics'), U('PHY102','Electricity & Magnetism'),
      U('PHY103','Thermodynamics'), U('PHY104','Modern Physics'),
      U('PHY105','Quantum Mechanics'), U('PHY106','Optics'),
      U('PHY107','Solid State Physics'), U('PHY108','Nuclear Physics')
    ]
  },
  {
    id: 'bchm', code: 'BSc-Chem', name: 'Bachelor of Science in Chemistry', facultyId: 'fac-sci', duration: '4 years',
    units: [
      U('CHM101','General Chemistry'), U('CHM102','Organic Chemistry I'),
      U('CHM103','Inorganic Chemistry'), U('CHM104','Physical Chemistry'),
      U('CHM105','Analytical Chemistry'), U('CHM106','Environmental Chemistry'),
      U('CHM107','Biochemistry'), U('CHM108','Industrial Chemistry')
    ]
  },
  {
    id: 'bbio', code: 'BSc-Bio', name: 'Bachelor of Science in Biology', facultyId: 'fac-sci', duration: '4 years',
    units: [
      U('BIO101','Cell Biology'), U('BIO102','Genetics'),
      U('BIO103','Ecology'), U('BIO104','Microbiology'),
      U('BIO105','Botany'), U('BIO106','Zoology'),
      U('BIO107','Evolution'), U('BIO108','Molecular Biology')
    ]
  },

  // ============= AGRICULTURE =============
  {
    id: 'bagric', code: 'BSc-Agri', name: 'Bachelor of Science in Agriculture', facultyId: 'fac-agri', duration: '4 years',
    units: [
      U('AGR101','Introduction to Agriculture'),
      U('AGR102','Soil Science'), U('AGR103','Crop Production'),
      U('AGR104','Animal Production'), U('AGR105','Agricultural Economics'),
      U('AGR106','Farm Management'), U('AGR107','Agricultural Extension'),
      U('AGR108','Plant Pathology')
    ]
  },
  {
    id: 'bvet', code: 'BVM', name: 'Bachelor of Veterinary Medicine', facultyId: 'fac-agri', duration: '5 years',
    units: [
      U('VET101','Veterinary Anatomy'), U('VET102','Veterinary Physiology'),
      U('VET103','Animal Nutrition'), U('VET104','Veterinary Microbiology'),
      U('VET105','Veterinary Pharmacology'), U('VET106','Veterinary Pathology'),
      U('VET107','Animal Surgery'), U('VET108','Veterinary Public Health')
    ]
  },

  // ============= ARCHITECTURE & BUILT ENVIRONMENT =============
  {
    id: 'barch', code: 'BArch', name: 'Bachelor of Architecture', facultyId: 'fac-arch', duration: '5 years',
    units: [
      U('ARC101','Architectural Design Studio I'),
      U('ARC102','History & Theory of Architecture'),
      U('ARC103','Building Construction & Materials'),
      U('ARC104','Structures for Architects'),
      U('ARC105','Environmental Design'),
      U('ARC106','Urban Design'),
      U('ARC107','Building Services'),
      U('ARC108','Professional Practice')
    ]
  },
  {
    id: 'bqs', code: 'BQS', name: 'Bachelor of Science in Quantity Surveying', facultyId: 'fac-arch', duration: '5 years',
    units: [
      U('QSV101','Introduction to Quantity Surveying'),
      U('QSV102','Measurement of Building Works'),
      U('QSV103','Construction Technology'),
      U('QSV104','Construction Economics'),
      U('QSV105','Contract Administration'),
      U('QSV106','Estimation & Tendering'),
      U('QSV107','Project Management')
    ]
  },

  // ============= ARTS & DESIGN =============
  {
    id: 'bfa', code: 'BFA', name: 'Bachelor of Fine Arts & Design', facultyId: 'fac-arts', duration: '4 years',
    units: [
      U('FAD101','Drawing Fundamentals'),
      U('FAD102','Colour Theory'),
      U('FAD103','Graphic Design'),
      U('FAD104','Digital Illustration'),
      U('FAD105','Typography'),
      U('FAD106','History of Art'),
      U('FAD107','Photography')
    ]
  },

  // ============= ENVIRONMENTAL =============
  {
    id: 'benv', code: 'BEnv', name: 'Bachelor of Environmental Studies', facultyId: 'fac-env', duration: '4 years',
    units: [
      U('ENV101','Environmental Science Fundamentals'),
      U('ENV102','Ecology & Biodiversity'),
      U('ENV103','Climate Change'),
      U('ENV104','Environmental Impact Assessment'),
      U('ENV105','Waste Management'),
      U('ENV106','Environmental Policy & Law'),
      U('ENV107','GIS & Remote Sensing')
    ]
  }
];

module.exports = { universities, faculties, courses };
