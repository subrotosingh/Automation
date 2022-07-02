Please follow the below instructions to run the test scripts.
(If Node js installed in your system then go to step 3)

1. Install Node JS in your system if not installed
   Download Node js: https://nodejs.org/en/download/
   Click on Windows Installer or macOS Installer for Windows or Mac OS respectively.
   Click on the downloaded installer.

2. open command prompt --> type node -v (it will display the version of installed node js).

3. Download the code from Github
   https://github.com/subrotosingh/Automation.git
   
4. Right click on the downloaded Automation-main.zip file and Extract all.

5. go to skyassesment folder through command prompt 
   (Example: cd C:\Users\Subroto Singh\Downloads\Automation-main\Automation-main\skyassesment)

6. type the following command in Command Prompt
   
   npm install
   
   npx playwright test
   
7. Test result can be seen on browser executing the following command:
   
   npx playwright show-report

