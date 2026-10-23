#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main() {
	// file handling
	fstream data("data.txt", ios::app);
	// Data Types & Variable Declaration
	string name, address, fathername, fatherjob, fathercnum, nationality, studentName, studentID, studentEmail, idcard, fatheridcard, cnum, gmail, dob, gender, condition, department, course;
	int choice, catogry, fee; string program;
	//fee
	int final_fee, Dfinal_fee, Sfinal_fee;
	//choice
	int choice1, choice11, choice12, choice13;
	int choice2, choice21, choice22, choice23;
	int choice3, choice31, choice32, choice33;
	char select1, select2, select3;
	// Academic
	string matricRollNo, interRollNo, matricGrade, interGrade, matricBoard, interBoard, school, clg , passingYearMatric, passingYearInter;
	double matricPercentage , matricMarks, interMarks, interPercentage, matricGPA, interGPA;
	string bsUniversity, bsGrade, bsRegNo, bsProgram;
	float bsGPA;
	int bsYear;
	string mscUniversity, mscGrade, mscRegNo, mscProgram;
	float mscGPA;
	int mscYear;

	double CGPA;
	// Scholarships
	int	 postgradMerit90 = 90;
	int	 postgradMerit50 = 50;
	int	 postgradMerit30 = 30;
	int	 undergradMerit90 = 90;
	int	 undergradMerit50 = 50;
	int	 undergradMerit30 = 30;
	int	 gradMerit90 = 90;
	int	 gradMerit50 = 50;
	int	 gradMerit30 = 30;

	// Roll Number 
	string rollno1, rollno2, rollno3;
	//fee for under Graduate program


	//for cs and it departnment
	int csFee = 268000;
	int seFee = 245000;
	int aiFee = 227000;
	int scFee = 208000;
	int itFee = 240000;
	int dsFee = 205000;
	//for engineering departnment

	int ceFee = 248000;
	int eeFee = 220000;
	int meFee = 283000;
	int ieFee = 208000;
	//for medical and health departnment

	int mmFee = 300000;
	int nmFee = 150000;
	int pmFee = 200000;
	int bmFee = 210000;
	int dmFee = 180000;

	//fee for  Graduate program


	//for cs and it departnment
	int csGFee = 280000;
	int seGFee = 275000;
	int aiGFee = 270000;
	int scGFee = 265000;
	int itGFee = 260000;
	int dsGFee = 250000;
	//for engineering departnment

	int ceGFee = 240000;
	int eeGFee = 230000;
	int meGFee = 220000;
	int ieGFee = 210000;
	//for law departnment

	int blGFee = 234000;
	int ilGFee = 244000;
	int colGFee = 250000;
	int crlGFee = 248000;
	int flGFee = 255000;

	//fee for Post Graduate program


	//for cs and it departnment
	int csPGFee = 305000;
	int sePGFee = 275000;
	int aiPGFee = 235000;
	int scPGFee = 245000;
	int itPGFee = 260000;
	int dsPGFee = 250000;
	//for engineering departnment

	int cePGFee = 280000;
	int eePGFee = 260000;
	int mePGFee = 297000;
	int iePGFee = 302000;
	//for medical and health departnment

	int mmPGFee = 340000;
	int nmPGFee = 325000;
	int pmPGFee = 307000;
	int bmPGFee = 312000;
	int dmPGFee = 318000;



	// Personal Information
	cout << "\n\tWELCOME TO THE UNIVERSITY ADMISSION SYSTEM\n";
	cout << "\n\tWelcome to Personal Information Section " << endl << endl;

	cout << "Enter your Name : ";
	getline(cin, name);
	cout << "Enter your Date of Birth (pattern MM/DD/YYYY): ";
	getline(cin, dob);
	cout << "Enter your Gender = ";
	getline(cin, gender);
	cout << "Enter your CNIC number (numbers only): ";
	getline(cin, idcard);
	while (idcard.length() != 13) {
		cout << "Invalid CNIC number! Please enter a 13-digit numeric CNIC number." << endl;
		cout << "Enter your CNIC number (numbers only): ";
		getline(cin, idcard);

	}
	cout << "Enter your Contact Number : ";
	getline(cin, cnum);
	while (cnum.length() != 11) {
		cout << "Invalid Contact Number! Please enter an 11-digit number starting with '03'." << endl;
		cout << "Enter your Contact Number : ";
		getline(cin, cnum);

	}

	cout << "Enter your Father Name : ";
	getline(cin, fathername);
	cout << "Enter your Father's CNIC number (numbers only): ";
	getline(cin, fatheridcard);
	while (fatheridcard.length() != 13) {
		cout << "Invalid CNIC number! Please enter a 13-digit numeric CNIC number." << endl;
		cout << "Enter your CNIC number (numbers only): ";
		getline(cin, fatheridcard);

	}
	cout << "Enter your Father's Job = ";
	getline(cin, fatherjob);
	cout << "Enter your Father's Contact Number : ";
	getline(cin, fathercnum);
	while (cnum.length() != 11) {
		cout << "Invalid Contact Number! Please enter an 11-digit number starting with '03'." << endl;
		cout << "Enter your Father's Contact Number : ";
		getline(cin, fathercnum);

	}
	cout << "Enter your Permanent Address : ";
	getline(cin, address);
	cout << "Enter your Country = ";
	getline(cin, nationality);
	cout << "Enter your Permanent Gmail : ";
	getline(cin, gmail);

	cout << "Personal Information is saved !\n\n\n";
	// Academic Information


	cout << "Welcome to the Admission System!" << endl;
	cout << "Please choose the program you want to take admission in:" << endl;
	cout << "1. Bachelor's Program" << endl;
	cout << "2. Master's Program" << endl;
	cout << "3. PhD's Program " << endl;
	cout << "Enter your choice (1, 2, or 3): ";
	cin >> choice;

	switch (choice) {
	case 1:
		// Matric & Intermediate Information
		program = "Bachlor's Program";
		cout << "You have chosen to apply for a "<< program << endl;
		cout << "Kindly fill in the information required below for admission purposes." << endl;

		cout << "Enter your Matric Marks (out of 1100): ";
		cin >> matricMarks;
		while (matricMarks < 0 || matricMarks > 1100) {
			cout << "Invalid marks! Please enter marks between 0 and 1100: ";
			cin >> matricMarks;
		}
		if (matricMarks < 455) {
			cout << "Your grade is F due to marks less than 50% in Matric. You are not eligible for admission." << endl;
			system("pause");
			exit(0);
		}
		matricPercentage = matricMarks / 1100 * 100;
		cout << "Matric Percentage: " << matricPercentage << "%" << endl;
		cin.ignore();
		cout << "Enter your Matric Roll Number: ";
		getline(cin, matricRollNo);
		cout << "Enter your school name: ";
		getline(cin, school);
		cout << "Enter your Matric Passing Year: ";
		cin >> passingYearMatric;
		cin.ignore();
		cout << "Enter your Examination Board: ";
		getline(cin, matricBoard);

		cout << "Matric result is updated successfully. Please enter your Intermediate Result." << endl;
		cout << "Enter your Inter Marks (out of 1100): ";
		cin >> interMarks;
		while (interMarks < 0 || interMarks > 1100) {
			cout << "Invalid marks! Please enter marks between 0 and 1100: ";
			cin >> interMarks;
		}
		if (interMarks < 455) {
			cout << "Your grade is F due to marks less than 50% in Matric. You are not eligible for admission." << endl;
			system("pause");
			exit(0);
		}

		interPercentage = interMarks / 1100 * 100;
		cout << "Intermediate Percentage: " << interPercentage << "%" << endl;
		cin.ignore();
		cout << "Enter your Inter Roll Number: ";
		getline(cin, interRollNo);
		cout << "Enter the name of your college: ";
		getline(cin, clg);
		cout << "Enter your Inter Passing Year: ";
		cin >> passingYearInter;
		cin.ignore();
		cout << "Enter your Examination Board: ";
		getline(cin, interBoard);
		cout << "Your information has been saved successfully" << endl;

		// Department Selection
		while (true) {
			program = "Bachelor's Program ";
			cout << "\nYou selected"<< program << " Here are the List of Departments:\n";
			cout << "1. Computer Science and Information Technology\n";
			cout << "2. Engineering\n";
			cout << "3. Medical and Health Sciences\n";
			cin >> choice1;

			switch (choice1) {
			case 1:
				while (true) {
					department = "Computer Science and Information Technology";
					cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
					cout << "A. Computer Science\nB. Software Engineering\nC. Artificial Intelligence\nD. Cyber Security\nE. Information Technology\nF. Data Science\n";
					cin >> select1;
					switch (select1) {
					case 'A': case 'a': course = "Computer Science"; final_fee = csFee; break;
					case 'B': case 'b': course = "Software Engineering"; final_fee = seFee; break;
					case 'C': case 'c': course = "Artificial Intelligence"; final_fee = aiFee; break;
					case 'D': case 'd': course = "Cyber Security"; final_fee = scFee; break;
					case 'E': case 'e': course = "Information Technology"; final_fee = itFee; break;
					case 'F': case 'f': course = "Data Science"; final_fee = dsFee; break;
					default: cout << "Invalid Choice.\n"; continue;
					}
					break;
				}
				break;

			case 2:
				while (true) {
					department = "Engineering";
					cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
					cout << "A. Civil Engineering\nB. Electrical Engineering\nC. Mechanical Engineering\nD. Industrial Engineering\n";
					cin >> select1;
					switch (select1) {
					case 'A': case 'a': course = "Civil Engineering"; final_fee = ceFee; break;
					case 'B': case 'b': course = "Electrical Engineering"; final_fee = eeFee; break;
					case 'C': case 'c': course = "Mechanical Engineering"; final_fee = meFee; break;
					case 'D': case 'd': course = "Industrial Engineering"; final_fee = ieFee; break;
					default: cout << "Invalid Choice.\n"; continue;
					}
					break;
				}
				break;

			case 3:
				while (true) {
					department = "Medical and Health Sciences";
					cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
					cout << "A. Medical MBBS\nB. Nursing\nC. Pharmacy\nD. Biotechnology\nE. Dentistry\n";
					cin >> select1;
					switch (select1) {
					case 'A': case 'a': course = "Medical MBBS"; final_fee = mmFee; break;
					case 'B': case 'b': course = "Nursing"; final_fee = nmFee; break;
					case 'C': case 'c': course = "Pharmacy"; final_fee = pmFee; break;
					case 'D': case 'd': course = "Biotechnology"; final_fee = bmFee; break;
					case 'E': case 'e': course = "Dentistry"; final_fee = dmFee; break;
					default: cout << "Invalid Choice.\n"; continue;
					}
					break;
				}
				break;

			default:
				cout << "Invalid Department Choice.\n";
				continue;
			}
			break;
		}

		// Scholarship
		cout << "MERIT BASED SCHOLARSHIP" << endl;
		cout << "Upto " << undergradMerit90 << "% for 90% merit" << endl;
		cout << "Upto " << undergradMerit50 << "% for 80% merit" << endl;
		cout << "Upto " << undergradMerit30 << "% for 75% merit" << endl;

		if (interPercentage < 0 || interPercentage > 100) {
			cout << "Invalid merit percentage. Merit should be between 0 and 100." << endl;
		}
		else if (interPercentage >= 90) {
			cout << undergradMerit90 << "% scholarship granted." << endl;
			Dfinal_fee = final_fee * undergradMerit90 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else if (interPercentage >= 80 && interPercentage < 90) {
			cout << undergradMerit50 << "% scholarship granted." << endl;
			Dfinal_fee = final_fee * undergradMerit50 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else if (interPercentage >= 75 && interPercentage < 80) {
			cout << undergradMerit30 << "% scholarship granted." << endl;
			Dfinal_fee = final_fee * undergradMerit30 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else {
			cout << "No scholarship granted." << endl;
		}

		// Fee Challan
		rollno1 = "BS-01-2025";
		cout << "/tFee Challan\n";
		cout << "Fee Challan Generated" << endl;
		cout << "-----------------------" << endl;
		cout << "Student Name: " << name << endl;
		cout << "Student ID: " << rollno1 << endl;
		cout << "Program = " << program << endl;
		cout << "Student Email: " << gmail << endl;
		cout << "Department: " << department << endl;
		cout << "Course Enrolled = " << course << endl;
		cout << "Total Fee : " << "RS ." << final_fee << endl;
		cout << "Total Discount Fee: " << "  RS ." << Dfinal_fee << endl;
		cout << "Total Fee after Discount: " << "  RS ." << Sfinal_fee << endl;


		// code break here
		break;

	case 2:
		// Academic Information
		cout << "You have chosen to apply for Master's program" << endl;

		// Input academic details
		cout << "Enter the name of your BS Program: ";
		cin.ignore();
		getline(cin, bsProgram);
		cout << "Enter your BS Registration Number: ";
		cin.ignore();
		getline(cin, bsRegNo);
		cout << "Enter your BS Passing Year: ";
		cin >> bsYear;
		cout << "Enter your CGPA (between 1 and 4): ";
		cin >> bsGPA;

		// Validate CGPA input
		while (bsGPA < 1.0 || bsGPA > 4.0) {
			cout << "Invalid GPA! Please enter a GPA between 1 and 4: ";
			cin >> bsGPA;
		}
		if (bsGPA < 2.0 || bsGrade == "F" || bsGrade == "f") {
			cout << "You are not eligible for admission due to low GPA or grade F in BS program." << endl;
			system("pause");
			exit(0);
		}


		cout << "Enter the name of your last attended university: ";
		cin.ignore();
		getline(cin, bsUniversity);

		// Department selection
		while (true) {
			program = "Master's Program ";
			cout << "\nYou selected " << program << " program. Here are the List of Departments:\n";
			cout << "1. Computer Science and Information Technology\n";
			cout << "2. Engineering\n";
			cout << "3. Law\n";
			cin >> choice2;

			switch (choice2) {
			case 1: { // Computer Science and IT
						while (true) {
							department = "Computer Science and Information Technology";
							cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
							cout << "A. Computer Science\nB. Software Engineering\nC. Artificial Intelligence\nD. Cyber Security\nE. Information Technology\nF. Data Science\n";
							cin >> select2;
							switch (select2) {
							case 'A': case 'a': course = "Computer Science"; final_fee = csGFee; break;
							case 'B': case 'b': course = "Software Engineering"; final_fee = seGFee; break;
							case 'C': case 'c': course = "Artificial Intelligence"; final_fee = aiGFee; break;
							case 'D': case 'd': course = "Cyber Security"; final_fee = scGFee; break;
							case 'E': case 'e': course = "Information Technology"; final_fee = itGFee; break;
							case 'F': case 'f': course = "Data Science"; final_fee = dsGFee; break;
							default: cout << "Invalid Choice.\n"; continue;
							}
							break;
						}
						break;
			}
			case 2: { // Engineering
						while (true) {
							department = "Engineering";
							cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
							cout << "A. Civil Engineering\nB. Electrical Engineering\nC. Mechanical Engineering\nD. Industrial Engineering\n";
							cin >> select2;
							switch (select2) {
							case 'A': case 'a': course = "Civil Engineering"; final_fee = ceGFee; break;
							case 'B': case 'b': course = "Electrical Engineering"; final_fee = eeGFee; break;
							case 'C': case 'c': course = "Mechanical Engineering"; final_fee = meGFee; break;
							case 'D': case 'd': course = "Industrial Engineering"; final_fee = ieGFee; break;
							default: cout << "Invalid Choice.\n"; continue;
							}
							break;
						}
						break;
			}
			case 3: { // Law
						while (true) {
							department = "Law";
							cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
							cout << "A. Bachelor of Law\nB. International Law\nC. Corporate Law\nD. Criminal Law\nE. Family Law\n";
							cin >> select2;
							switch (select2) {
							case 'A': case 'a': course = "Bachelor of Law"; final_fee = blGFee; break;
							case 'B': case 'b': course = "International Law"; final_fee = ilGFee; break;
							case 'C': case 'c': course = "Corporate Law"; final_fee = colGFee; break;
							case 'D': case 'd': course = "Criminal Law"; final_fee = crlGFee; break;
							case 'E': case 'e': course = "Family Law"; final_fee = flGFee; break;
							default: cout << "Invalid Choice.\n"; continue;
							}
							break;
						}
						break;
			}
			default:
				cout << "Invalid Department Choice.\n";
				continue;
			}
			break;
		}
		 
		// Scholarship calculations
		cout << "MERIT BASED SCHOLARSHIP" << endl;
		cout << "Enter your CGPA for scholarship consideration: ";
		cin >> CGPA;

		if (CGPA < 0 || CGPA > 4.0) {
			cout << "Invalid CGPA. It should be between 0.0 and 4.0." << endl;
		}
		else if (CGPA >= 3.8) {
			cout << gradMerit90  << " % Scholarship granted." << endl;
			Dfinal_fee = final_fee * gradMerit90 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else if (CGPA >= 3.5 && CGPA < 3.8 ) {
			cout << gradMerit50 << " % Scholarship granted." << endl;
			Dfinal_fee = final_fee * gradMerit50 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else if (CGPA >= 3.25 && CGPA < 3.5) {
			cout << gradMerit30 << " % Scholarship granted." << endl;
			Dfinal_fee = final_fee * gradMerit30 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else {
			cout << "No scholarship granted." << endl;
		}

		// Fee Challan
		rollno2 = "MS-01-2025";
		cout << "\nFee Challan Generated" << endl;
		cout << "-----------------------" << endl;
		cout << "Student Name: " << name << endl;
		cout << "Student ID: " << rollno2 << endl;
		cout << "Program = " << program << endl;
		cout << "Student Email: " << gmail << endl;
		cout << "Department: " << department << endl;
		cout << "Course Enrolled: " << course << endl;
		cout << "Total Fee: RS. " << final_fee << endl;
		cout << "Total Discount Fee: RS. " << Dfinal_fee << endl;
		cout << "Total Fee after Discount: RS. " << Sfinal_fee << endl;

		// code break here
		break;

	case 3:
		// Academic Information
		cout << "You have chosen to apply for a PhD program" << endl;
		cout << "Enter the name of your MS Program: ";
		cin.ignore();
		getline(cin, mscProgram);
		cout << "Enter your MS Registration Number: ";
		cin.ignore();
		getline(cin, mscRegNo);
		cout << "Enter your MS Passing Year: ";
		cin >> mscYear;
		cin.ignore();
		cout << "Enter your GPA (between 1 and 4): ";
		cin >> mscGPA;
		while (mscGPA < 1.0 || mscGPA > 4.0) {
			cout << "Invalid GPA! Please enter a GPA between 1 and 4: ";
			cin >> mscGPA;
		}
		if (mscGPA < 2.0 || mscGrade == "F" || mscGrade == "f") {
			cout << "You are not eligible for admission due to low GPA or grade F in MS program." << endl;
			system("pause");
			exit(0);
		}

		cin.ignore(); 
		cout << "Enter the name of your last attended university: ";
		getline(cin, mscUniversity);

		// Department Selection
		while (true) {
			program = "PhD Program";
			cout << "\nYou selected " << program << " program. Here are the List of Departments:\n";
			cout << "1. Computer Science and Information Technology\n";
			cout << "2. Engineering\n";
			cout << "3. Medical and Health Sciences\n";
			cin >> choice3;

			switch (choice3) {
			case 1:
				department = "Computer Science and Information Technology";
				cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
				cout << "A. Computer Science\nB. Software Engineering\nC. Artificial Intelligence\nD. Cyber Security\nE. Information Technology\nF. Data Science\n";
				cin >> select3;
				switch (select3) {
				case 'A': case 'a': course = "Computer Science"; final_fee = csPGFee; break;
				case 'B': case 'b': course = "Software Engineering"; final_fee = sePGFee; break;
				case 'C': case 'c': course = "Artificial Intelligence"; final_fee = aiPGFee; break;
				case 'D': case 'd': course = "Cyber Security"; final_fee = scPGFee; break;
				case 'E': case 'e': course = "Information Technology"; final_fee = itPGFee; break;
				case 'F': case 'f': course = "Data Science"; final_fee = dsPGFee; break;
				default: cout << "Invalid Choice.\n"; continue;
				}
				break;

			case 2:
				department = "Engineering";
				cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
				cout << "A. Civil Engineering\nB. Electrical Engineering\nC. Mechanical Engineering\nD. Industrial Engineering\n";
				cin >> select3;
				switch (select3) {
				case 'A': case 'a': course = "Civil Engineering"; final_fee = cePGFee; break;
				case 'B': case 'b': course = "Electrical Engineering"; final_fee = eePGFee; break;
				case 'C': case 'c': course = "Mechanical Engineering"; final_fee = mePGFee; break;
				case 'D': case 'd': course = "Industrial Engineering"; final_fee = iePGFee; break;
				default: cout << "Invalid Choice.\n"; continue;
				}
				break;

			case 3:
				department = "Medical and Health Sciences";
				cout << "\nYou selected " << department << " Department. Here are the available courses:\n";
				cout << "A. Medical MBBS\nB. Nursing\nC. Pharmacy\nD. Biotechnology\nE. Dentistry\n";
				cin >> select3;
				switch (select3) {
				case 'A': case 'a': course = "Medical MBBS"; final_fee = mmPGFee; break;
				case 'B': case 'b': course = "Nursing"; final_fee = nmPGFee; break;
				case 'C': case 'c': course = "Pharmacy"; final_fee = pmPGFee; break;
				case 'D': case 'd': course = "Biotechnology"; final_fee = bmPGFee; break;
				case 'E': case 'e': course = "Dentistry"; final_fee = dmPGFee; break;
				default: cout << "Invalid Choice.\n"; continue;
				}
				break;

			default:
				cout << "Invalid Department Choice.\n";
				continue;
			}
			break; // Exit loop after valid selection
		}

		// Scholarship Calculation
		cout << "MERIT BASED SCHOLARSHIP" << endl;
		cout << "Enter your CGPA for scholarship consideration: ";
		cin >> CGPA;
		gradMerit30
		if (CGPA < 0 || CGPA > 4.0) {
			cout << "Invalid CGPA. It should be between 0.0 and 4.0." << endl;
		}
		else if (CGPA >= 3.8) {
			cout << gradMerit90 << " % 
				Scholarship granted." << endl;
			Dfinal_fee = final_fee * postgradMerit90 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else if (CGPA >= 3.5 && CGPA <3.8) {
			cout << gradMerit50 << " % Scholarship granted." << endl;
			Dfinal_fee = final_fee * postgradMerit50 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else if (CGPA >= 3.25 && CGPA < 3.5) {
			cout << gradMerit30 << "% Scholarship granted." << endl;
			Dfinal_fee = final_fee * postgradMerit30 / 100;
			Sfinal_fee = final_fee - Dfinal_fee;
		}
		else {
			cout << "No scholarship granted." << endl;
			Sfinal_fee = final_fee;
		}

		// Fee Challan
		rollno3 = "PhD-02-2025";
		cout << "Fee Challan Generated" << endl;
		cout << "-----------------------" << endl;
		cout << "Student Name: " << name << endl;
		cout << "Student ID: " << rollno3 << endl;
		cout << "Student Email: " << gmail << endl;
		cout << "Program = " << program << endl;
		cout << "Department: " << department << endl;
		cout << "Course Enrolled: " << course << endl;
		cout << "Total Fee: RS. " << final_fee << endl;
		cout << "Total Discounted Fee: RS. " << Dfinal_fee << endl;
		cout << "Total Fee After Discount: RS. " << Sfinal_fee << endl;

		// case break here
		break;


	default:
		cout << "Invalid choice! Please restart the program and enter a valid option." << endl;
		break;
		// first switch statement break here
	} 
	// file handling
	data.is_open();
	if (!data.is_open()){
		cout << "File do not Open properly !" << endl;
	}
	else {
		data << "Name = " << name << endl;
		data << "Gender = " << gender << endl;
		data << "Contact Number = " << cnum << endl;
		data << "Date of Birth = " << dob << endl;
		data << "Gmail = " << gmail << endl;
		data << "CNIC Number = " << idcard << endl;
		data << "Father Name = " <<fathername << endl;
		data << "Father Contact Number = " << fathercnum << endl;
		data << "Father's CNIC Number = " << fatheridcard << endl;
		data << "Father's Job = " << fatherjob << endl;
		data << "Nationality = " << nationality << endl;
		data << "Permanent Address = " << address << endl;
		data << "Program = " << program << endl;
		data << "Department = " << department << endl;
		data << "Course = " << course << endl;
		data << "Total Fee = " << final_fee << endl;
		data << "Total Discounted Fee: RS. " << Dfinal_fee << endl;
		data << "Total Fee After Discount: RS. " << Sfinal_fee << endl;
		data << "---------------------------------------------------" << endl;


	}
	
	data.close();

	system("pause");
	return 0;
}