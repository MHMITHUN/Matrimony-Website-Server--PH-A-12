const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');
const Biodata = require('./models/Biodata');
const SuccessStory = require('./models/SuccessStory');
const connectDB = require('./config/db');

const seedData = async () => {
    try {
        await connectDB();

        console.log('🗑️  Clearing existing data...');
        await User.deleteMany({});
        await Biodata.deleteMany({});
        await SuccessStory.deleteMany({});

        console.log('👤 Creating admin user...');
        const admin = await User.create({
            name: 'Admin',
            email: 'admin@islamicmatrimony.com',
            photoURL: 'https://i.ibb.co/5GzXkwq/admin.png',
            role: 'admin',
            isPremium: true,
            premiumRequestStatus: 'approved'
        });

        console.log('👥 Creating sample users...');
        const users = await User.insertMany([
            { name: 'Ahmed Rahman', email: 'ahmed@example.com', role: 'user', isPremium: true },
            { name: 'Fatima Begum', email: 'fatima@example.com', role: 'user', isPremium: true },
            { name: 'Mohammad Ali', email: 'mohammad@example.com', role: 'user', isPremium: true },
            { name: 'Ayesha Khan', email: 'ayesha@example.com', role: 'user', isPremium: true },
            { name: 'Ibrahim Hossain', email: 'ibrahim@example.com', role: 'user', isPremium: true },
            { name: 'Khadija Akter', email: 'khadija@example.com', role: 'user', isPremium: true },
            { name: 'Yusuf Chowdhury', email: 'yusuf@example.com', role: 'user', isPremium: false },
            { name: 'Maryam Islam', email: 'maryam@example.com', role: 'user', isPremium: false },
        ]);

        console.log('📝 Creating sample biodatas...');
        const biodatas = [
            {
                biodataId: 1,
                userId: users[0]._id,
                userEmail: users[0].email,
                biodataType: 'Male',
                name: 'Ahmed Rahman',
                profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                dateOfBirth: new Date('1995-03-15'),
                height: '5\'8"',
                weight: '70-75 kg',
                age: 29,
                occupation: 'Engineer',
                race: 'Fair',
                fathersName: 'Abdul Rahman',
                mothersName: 'Selina Rahman',
                permanentDivision: 'Dhaka',
                presentDivision: 'Dhaka',
                expectedPartnerAge: '22-28',
                expectedPartnerHeight: '5\'2"',
                expectedPartnerWeight: '50-55 kg',
                mobileNumber: '+8801712345678',
                isPremium: true,
                premiumRequestStatus: 'approved'
            },
            {
                biodataId: 2,
                userId: users[1]._id,
                userEmail: users[1].email,
                biodataType: 'Female',
                name: 'Fatima Begum',
                profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
                dateOfBirth: new Date('1998-07-22'),
                height: '5\'4"',
                weight: '55-60 kg',
                age: 26,
                occupation: 'Doctor',
                race: 'Light Brown',
                fathersName: 'Mohammad Karim',
                mothersName: 'Halima Khatun',
                permanentDivision: 'Chattagram',
                presentDivision: 'Dhaka',
                expectedPartnerAge: '28-35',
                expectedPartnerHeight: '5\'7"',
                expectedPartnerWeight: '65-70 kg',
                mobileNumber: '+8801812345678',
                isPremium: true,
                premiumRequestStatus: 'approved'
            },
            {
                biodataId: 3,
                userId: users[2]._id,
                userEmail: users[2].email,
                biodataType: 'Male',
                name: 'Mohammad Ali',
                profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
                dateOfBirth: new Date('1992-11-10'),
                height: '5\'10"',
                weight: '75-80 kg',
                age: 32,
                occupation: 'Business',
                race: 'Brown',
                fathersName: 'Rahim Ali',
                mothersName: 'Rashida Ali',
                permanentDivision: 'Sylhet',
                presentDivision: 'Sylhet',
                expectedPartnerAge: '24-30',
                expectedPartnerHeight: '5\'3"',
                expectedPartnerWeight: '50-55 kg',
                mobileNumber: '+8801912345678',
                isPremium: true,
                premiumRequestStatus: 'approved'
            },
            {
                biodataId: 4,
                userId: users[3]._id,
                userEmail: users[3].email,
                biodataType: 'Female',
                name: 'Ayesha Khan',
                profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
                dateOfBirth: new Date('1999-02-14'),
                height: '5\'3"',
                weight: '50-55 kg',
                age: 25,
                occupation: 'Teacher',
                race: 'Fair',
                fathersName: 'Jamal Khan',
                mothersName: 'Nasreen Khan',
                permanentDivision: 'Khulna',
                presentDivision: 'Dhaka',
                expectedPartnerAge: '27-33',
                expectedPartnerHeight: '5\'8"',
                expectedPartnerWeight: '70-75 kg',
                mobileNumber: '+8801612345678',
                isPremium: true,
                premiumRequestStatus: 'approved'
            },
            {
                biodataId: 5,
                userId: users[4]._id,
                userEmail: users[4].email,
                biodataType: 'Male',
                name: 'Ibrahim Hossain',
                profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
                dateOfBirth: new Date('1994-08-30'),
                height: '5\'9"',
                weight: '72-77 kg',
                age: 30,
                occupation: 'Job',
                race: 'Light Brown',
                fathersName: 'Rafiq Hossain',
                mothersName: 'Amina Hossain',
                permanentDivision: 'Rangpur',
                presentDivision: 'Dhaka',
                expectedPartnerAge: '23-28',
                expectedPartnerHeight: '5\'2"',
                expectedPartnerWeight: '48-55 kg',
                mobileNumber: '+8801512345678',
                isPremium: true,
                premiumRequestStatus: 'approved'
            },
            {
                biodataId: 6,
                userId: users[5]._id,
                userEmail: users[5].email,
                biodataType: 'Female',
                name: 'Khadija Akter',
                profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
                dateOfBirth: new Date('1997-04-18'),
                height: '5\'5"',
                weight: '52-57 kg',
                age: 27,
                occupation: 'Student',
                race: 'Fair',
                fathersName: 'Kamal Uddin',
                mothersName: 'Salma Akter',
                permanentDivision: 'Mymensingh',
                presentDivision: 'Dhaka',
                expectedPartnerAge: '28-35',
                expectedPartnerHeight: '5\'9"',
                expectedPartnerWeight: '70-80 kg',
                mobileNumber: '+8801412345678',
                isPremium: true,
                premiumRequestStatus: 'approved'
            },
            {
                biodataId: 7,
                userId: users[6]._id,
                userEmail: users[6].email,
                biodataType: 'Male',
                name: 'Yusuf Chowdhury',
                profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
                dateOfBirth: new Date('1996-12-05'),
                height: '5\'7"',
                weight: '68-73 kg',
                age: 28,
                occupation: 'Engineer',
                race: 'Brown',
                fathersName: 'Shafiq Chowdhury',
                mothersName: 'Fatema Chowdhury',
                permanentDivision: 'Barisal',
                presentDivision: 'Chattagram',
                expectedPartnerAge: '22-27',
                expectedPartnerHeight: '5\'2"',
                expectedPartnerWeight: '48-55 kg',
                mobileNumber: '+8801312345678',
                isPremium: false,
                premiumRequestStatus: 'none'
            },
            {
                biodataId: 8,
                userId: users[7]._id,
                userEmail: users[7].email,
                biodataType: 'Female',
                name: 'Maryam Islam',
                profileImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
                dateOfBirth: new Date('2000-09-25'),
                height: '5\'2"',
                weight: '48-53 kg',
                age: 24,
                occupation: 'Housewife',
                race: 'Fair',
                fathersName: 'Harun Islam',
                mothersName: 'Morium Islam',
                permanentDivision: 'Dhaka',
                presentDivision: 'Dhaka',
                expectedPartnerAge: '26-32',
                expectedPartnerHeight: '5\'6"',
                expectedPartnerWeight: '65-75 kg',
                mobileNumber: '+8801212345678',
                isPremium: false,
                premiumRequestStatus: 'none'
            }
        ];

        await Biodata.insertMany(biodatas);

        console.log('💍 Creating sample success stories...');
        await SuccessStory.insertMany([
            {
                selfBiodataId: 1,
                partnerBiodataId: 2,
                maleBiodataId: 1,
                femaleBiodataId: 2,
                coupleImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
                marriageDate: new Date('2024-06-15'),
                reviewStar: 5,
                successStoryText: 'Alhamdulillah, we found each other through this platform. After months of talking and understanding each other, our families agreed and we had a beautiful Nikah ceremony. This platform made the process so easy and halal. Highly recommended for all Muslims looking for a life partner!',
                userId: users[0]._id
            },
            {
                selfBiodataId: 3,
                partnerBiodataId: 4,
                maleBiodataId: 3,
                femaleBiodataId: 4,
                coupleImage: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600',
                marriageDate: new Date('2024-03-20'),
                reviewStar: 5,
                successStoryText: 'SubhanAllah! I was skeptical about online matrimony platforms, but Nikah Matrimony proved me wrong. The verification process and Islamic approach gave me confidence. Within 3 months of joining, I found my perfect match. May Allah bless this platform!',
                userId: users[2]._id
            },
            {
                selfBiodataId: 5,
                partnerBiodataId: 6,
                maleBiodataId: 5,
                femaleBiodataId: 6,
                coupleImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600',
                marriageDate: new Date('2024-01-10'),
                reviewStar: 4,
                successStoryText: 'JazakAllah khair to this wonderful platform. We connected, spoke with our families, and everything fell into place so smoothly. The premium features really helped us communicate properly. Now we are happily married and blessed with a beautiful life together.',
                userId: users[4]._id
            }
        ]);

        console.log('✅ Seed data created successfully!');
        console.log('📊 Summary:');
        console.log(`   - Admin: admin@islamicmatrimony.com`);
        console.log(`   - Users: ${users.length}`);
        console.log(`   - Biodatas: ${biodatas.length}`);
        console.log(`   - Success Stories: 3`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
