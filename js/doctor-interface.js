var Doctor = require('./../js/doctor.js').doctorModule;
var Location = require('./../js/location.js').locationModule;
var myDoctor = new Doctor();
var myLocation = new Location();

// var buildConditionsList = function(conditions) {
//   $("#condition").autocomplete({source: conditions});
// };

var conditions = ["Allergies", "Ankle Pain", "Arch Pain", "Arthritis Related Symptoms", "Back Pain", "Bone Symptoms", "Cancer", "Chronic Pain", "Diabetes", "Diet Education", "Digestive Problems", "Food Alergies", "Foot Pain", "Hand Pain", "Headaches", "Hip Pain", "Hormonal Imbalances", "Immobility", "Infertility", "Joint Instability", "Joint Pain", "Joint Stiffness", "Mood Changes", "Muscle Cramps", "Muscle Pain", "Muscle Spasms", "Muscle Weakness", "Neck Pain", "Nutritional Issues", "Obesity", "Osteoporosis", "Overweight", "Restless Legs", "Stiff Neck", "Weight Fluctuation", "Weight Loss", "Acne", "AIDS", "Allergy", "Anemia", "Arthritis", "Asthma", "Autism", "Breast cancer", "Headache", "Hepatitis", "HIV", "Pneumonia", "Psoriasis", "Tumor", "Cystic Fibrosis", "Diabetic Foot Symptoms", "Double Vision", "Enlarged Prostate", "Excessive Hunger", "Exhaustion", "Extreme Fatigue/Irritability", "Hair Loss", "Hormonal Changes", "Hyperactivity", "Hypertension", "Impotence", "Loss of Taste", "Menopause", "Pituitary Problems", "Postmenopausal Symptoms", "Sexual Complications", "Swollen Lymph Nodes", "Thyroid Symptoms", "Anemic Symptoms", "Blood Disorder Symptoms", "Chronic Nosebleed", "Hemophilia", "HIV/AIDS Symptoms", "Leukemia", "Lymphoma", "Myeloma", "Prostate Symptoms", "Sickle Cell Disease", "Muscle Stiffness", "Stress", "Tennis Elbow", "Walking Problems", "Alzheimer's Disease", "Coronary Artery Disease", "Dementia", "Hyperthyroidism", "Strokes", "Tumors", "Asthma Symptoms", "Chest Pain", "Dizziness/Lightheadedness", "Drug Allergy", "Ear Discharge", "Eye Discharge", "Food Allergy", "Frequent Infections", "Kidney Stones", "Malaria Symptoms", "Meningitis Symptoms", "Pain During Intercourse", "Persistent Low-Grade Fever", "Renal Failure", "Tuberculosis Symptoms", "Bed-Wetting", "Circadian Rhythm Disorders", "Congestion", "Insomnia", "Narcolepsy", "Night Sweats", "Night Terrors", "Nightmares", "Sleep Apnea", "Sleepwalking", "Snoring", "Allergic Cough", "Allergic Eye Problems", "Allergic Itch", "Allergic Rash", "Arm/Hand Pain", "Athlete's Foot", "Athlete's Foot", "Back & Neck & Shoulder Pain", "Bad Breath", "Blistering of Skin", "Breast Exam", "Changes in Taste", "Cold Sores", "Common Cold", "Diarrhea", "Dry Skin", "Ear Infection", "Ear Pain/Earache", "Ear Pressure", "Ear Problems", "Eczema Symptoms", "Family Planning", "Fever", "Food Allergy/Intolerance", "Frequent Urination", "Hay Fever/Seasonal Allergies", "Hives", "Injections", "Lab Services", "Leg/Foot Pain", "Mole Discoloration", "Mole Growth", "Muffled Hearing", "Newborn and Well-Child Care", "Oily Skin", "Pelvic Exam & Pap Smear", "Pelvic Exam & Pap Smear", "Physical Exams", "Poison Oak", "Poison Oak/Ivy", "Poor Equilibrium/Balance", "Rash", "Ringing/Buzzing in Ears", "Shoulder Pain", "Sunburn", "Unusual/Excessive Thirst", "Vaccinations", "Bone Symptoms/Condition", "Concussion", "Delirium", "Fracture", "Fractured Facial Bones", "Fractured Jaw", "Hallucinations", "Muscle Pull/Strain/Tear", "Articulation Problems", "Speech Problems", "Voice Disorders", "Allergic Swelling", "Bumpy Eyelids", "Burning in Throat", "Coeliac Disease Symptoms", "Crusty Eyelids", "Difficulty Swallowing", "Dry Eyes", "Dry Mouth", "Dry or Itchy Throat", "Eye Sensitivity", "Hay Fever & Seasonal Allergies", "Hoarseness in Voice", "Itchy Eyes", "Itchy Skin", "Lactose Intolerance", "Measles Symptoms", "Persistent Cough", "Redness of Eyes", "Runny Nose", "Swollen Tongue", "Watery Eyes", "Wheezing", "Alcohol/tobacco Addiction", "Depression", "Drug Addiction", "Eating Disorder", "Smoking Cessation", "Substance Abuse", "Anesthesia", "Pain Management", "Sedation", "Angina pectoris", "EKG", "Heart Disease", "Heart Problems", "Pacemaker", "Brain Tumors", "Cervical Spinal Stenosis", "Head Trauma", "Hydrocephalus", "Infections", "Lumbar Spinal Stenosis", "Spinal Cord Trauma", "Spinal Disc Herniation", "Spine Tumors", "Traumatic Injuries of Peripheral Nerves", "ADHD", "Anger Problems", "Anxiety", "Blacking Out", "Blurred Vision", "Cognitive Complications", "Confusion/Disorientation", "Deterioration of Vision", "Difficulty Concentrating", "Difficulty Speaking", "Excessive Perspiration", "Fainting (Syncope)", "Impaired Intellect", "Impaired Memory", "Learning Difficultes", "Loss of Smell", "Memory Loss", "Migraines", "Nervousness", "Panic Attacks", "Poor Balance", "Ringing in Ears", "Seizures", "Sensitivity to Light", "Shaky Hands", "Tremors", "Dyslipidemia", "Musculoskeletal Disorders", "Osteoarthritis", "Thyroid Disorders", "Wound Care", "Bleeding of Gums", "Chipped/Broken Tooth", "Crooked Teeth", "Jaw Irregularities", "Loose Tooth", "Lost/Missing Teeth Bad Breath", "Overbite", "Painful Chewing", "Painful Swallowing", "Receeding Gums", "Sensitive Teeth", "Sore Gums", "Swelling of Gums", "Teeth Sensitivity", "Temporomandibular Joint Disorders (TMJ)", "Tooth Discoloration", "Tooth Pain", "Toothache", "Underbite", "Unequal Jaw Growth", "Wisdom Teeth", "Bronchitis", "Chronic Cough", "Difficulty Breathing", "Hyperventilation", "Painful Breathing", "Phlegm/Mucus Buildup", "Pneumonia Related Symptoms", "Shortness of Breath", "Strained Breathing", "Tuberculosis", "Uncontrollable Sneezing Fits", "Ankle/Foot Pain", "Arch Pain/Problems", "Birth Defects", "Bunions", "Calluses", "Heel Spurs", "Prosthetic Limb Complications", "Swollen Joints", "Abcess", "Abdominal Bulge", "Black Stool", "Black Stool/Melena", "Blood or Mucus in Stool", "Cardiac Electrophysiology", "Cardiac Surgery", "Cardiag Surgery", "Cardiology", "Cleft Lip/Palate", "Constipation", "Deviated Septum", "Facial Infection", "Gastrointestinal Symptoms", "Head Tilt", "Heart Surgery", "Heart Transplant", "Hemorrhoids", "Interventional Cardiology", "Knee pain", "Loss of Appetite", "Lung Transplant", "Missing Testicle", "Rectal Bleeding", "Rectal Pain", "Spider Veins", "Sunken Soft Spots on Head", "Swollen Tonsils", "Thoracic Surgery", "Trauma Surgery", "Turned-in Foot", "Varicose Veins", "Wart Growth", "Deterioration/Loss of Vision", "Heartburn", "Inner Ear Disease Symptoms", "Nasal Symptoms", "Painful Swallowingl", "Post Nasal Drip", "Sleep Apnea (Snoring)", "Sore Throat", "Sudden or Gradual Hearing Loss", "Throat Symptoms", "Marriage Councelling", "School Councelling", "Critical Care", "Emergency care", "General Surgery", "Pulmonary Critical Care", "Ddigestive Problems", "Diabetes Cancer", "Infectious Diseases", "Kidney Problems", "Lung and Airway Problems", "Medical issues in surgical patients", "Psychiatric Problems", "Stomach and Intestinal Problems", "Urinary Tract Problems", "Abdominal/Stomach Pain", "Abdominal Swelling/Bloating", "Eating Disorder Symptoms", "Excessive Belching", "Gas", "Unusual Weight Loss", "Celiac Diseases", "Chronic Liver Disease", "Cirrhosis", "Enzyme Deficiencies", "Gall Stones", "Jaundice", "Liver Cancer", "Pancreatic Cancer", "Heel Spurs Joint Pain", "Physical therapy", "Swelling of Legs/Ankles", "Blood in Semen", "Blood in Urine", "Cloudy Urine", "Decreased Sex Drive", "Erectile Dysfunction (Impotence)", "Foul-Smelling Urine", "Genital Sores", "Incontinence", "Male Infertility", "Overactive Bladder", "Painful Urination", "Premature Ejaculation", "Testicular Pain", "Urinary Tract Infection", "Birth Control", "Changes in Menstruation", "Frequent Menstruation", "Increased Menstrual Flow", "Intermenstrual Bleeding", "Less Frequent Menstruation", "Menopause Symptoms", "Menstrual Cramps", "Menstrual Pain", "Nausea", "Pap Test/Smear", "Pelvic Pain", "Postpartum Depression", "Pregnancy", "Premenopausal Symptoms", "Prenatal/Postnatal Nutrition", "Protein in Urine", "Vaginal Discomfort/Pain", "Vaginal Itching", "Vaginal Odor", "Yeast Infection", "Astigmatism", "Cataracts", "Color Blindness", "Corneal Abrasion (Scratch)", "Corneal Abrasion (Scratch)", "Eye Infection", "Glaucomal", "Swollen Eyes", "Tunnel Vision", "Blisters", "Bruising", "Foot Symptoms", "Sprain", "tendonitis", "Botox Teatment", "Brest Augmentation", "Deformed Ears", "Drooping Eyelids", "Facelift", "Sagging Skin", "Scar Removal", "Tumor Removal", "Wrinkles", "Leg Pain", "Muscle Pull", "Chronic Hearth Failure", "HIV/AIDS", "Life-threatening Illnesses", "Allergic Swelling/Inflammation", "Corns", "Dandruff", "Fingernail Discoloration", "Cataract", "Memory Problems", "Pain", "Rheumatism", "Sleeping Problems", "Malaria", "Measles", "Meningitis", "Vaginal Discharge", "Vomiting", "DNA Screening", "Genetic Diseases", "Ingrown Toenail", "Physical Examination", "Preventinve Screening", "Vacconations Such as Flu Shots", "Workplace Safety", "bursitis", "motor vehicle accidents", "Multiple Sclerosis (MS)", "Neck and back pain", "Parkinson's", "pelvic and low back pain", "Sinusitis", "sprains", "strains", "trauma", "Vertigo", "Ccongenital Deformities", "Cleft Palate", "Head and Neck Cancer", "Reconstructive and Cosmetic Facial Surgery.", "Trauma-related Injuries", "Fibromyalgia", "Goat", "Lupus", "Marfan's Syndrome", "Schleroderma", "Gout Symptoms", "Autopsy", "Lab Tests", "Test Blood/Tissue/Organ Samples", "Balance Problems", "Hearing Aid", "Hearing Loss", "Hearing Problems", "Dark Urine", "High Blood Pressure", "Kidney Disease", "Kidney Disease Symptoms", "ADD Symptoms", "ADHD Symptoms", "Alzheimer's Disease", "General Mental Health Symptoms", "Increased Appetite", "Manic Depression Symptoms", "Muteness", "Post Traumatic Stress Disorder Symptoms", "Separation Anxiety", "Slurred Speech", "Stuttering"];

var buildInsurorsList = function(insurors) {
  $("#insuror").autocomplete({source: insurors});
};

var showLocation = function() {

};

var showDoctors = function(doctors) {
    $("#showDoctors").empty();
    $("#modals").empty();
    doctors.forEach(function(doctor) {
    var displayName = "";
    if (doctor.profile.first_name) {displayName = displayName.concat(doctor.profile.first_name);}
    if (doctor.profile.middle_name) {displayName = displayName.concat(' ' + doctor.profile.middle_name);}
    if (doctor.profile.last_name) {displayName = displayName.concat(' ' + doctor.profile.last_name);}
    if (doctor.profile.title) {displayName = displayName.concat(', ' + doctor.profile.title);}
    console.log(doctor);
    $("#showDoctors").append('<div class="doctorProfile well col-sm-6" data-toggle="modal" data-target="#' + doctor.uid + 'modal">' +
                // '<h1><input type="button" id="' + doctor.profile.first_name + ' ' + doctor.profile.last_name +  '" class="listCardsByName" value="'+ card.name +'"/></h1>' +
                '<img src="' + doctor.profile.image_url + '" alt="' + displayName + '" />' +
                '<p>Name: ' + displayName + '</p>' +
              '</div>');
    $("#modals").append('<div class="modal fade" id= ' + doctor.uid + 'modal" tabindex="-1" role="dialog">' +
                        '<div class="modal-dialog" role="document">' +
                          '<div class="modal-content">' +
                            '<div class="modal-body" data-dismiss="modal">' +
                              '<p>' + displayName +'</p>' +
        // #if ($panel.get(1).getImagePath())
        //   <img src="$panel.get(1).getImagePath()" alt="Current image">
        //   #if ($panel.get(1).getTexts().size() > 0)
        //     <p class="$panel.get(1).getTexts().get(0).getOrientation()">$panel.get(1).getTexts().get(0).getBody()</p>
        //   #end
        // #end
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>');
  });
};

$(document).ready(function() {
  $("#condition").autocomplete({source: conditions});
  // myDoctor.getAllConditions(buildConditionsList);
  myLocation.getLocation(showLocation);
  setTimeout(myDoctor.getAllInsurors(buildInsurorsList), 5000);
  $('#searchDoctorsByCondition').click(function() {
    event.preventDefault();
    var condition = $("#condition").val();
    console.log(condition);
    myDoctor.getDoctorsByCondition(condition, showDoctors);
  });
});

$(document).on("click", ".doctorProfile", function() {
  // $("#showTrackDetails").remove();
  // $(this).after('<span id="showTrackDetails"></span>');
  // var trackId = $(this).attr('id');
  // var artistName = $(this).attr('value');
  // var currentMusicObject = new Music();
  // currentMusicObject.getTrackDetails(trackId, trackDetails);
});
