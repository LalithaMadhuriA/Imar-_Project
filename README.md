# Imar-_Project
The project is developed for contact managements.The employee contacts are managed. The modules are developed using HTML, JQUERY, ANGULAR JS, CSS and PHP. The PHP is for the server side and the remaining are for the client side. As the PHP is easy to learn and use, I choosed it as the server side programing.

## Getting Started

The XAMPP server is used in the project. The source files/folders are placed in the htdocs folder of the XAMPP folder. The server should be started before opening the file on the browser. The url of the source file should be like 'localhost/folder_name/file_name'. The localhost is given because the PC is acting both as the client and the server.  

### Prerequisites
//What things you need to install the software and how to install them

```
The XAMPP is needed to execute. so install XAMPP SERVER in your machine
The browser is needed to run the HTML file.
The database should be created in the server(my database name is contacts_management). Many number of relations can be created in the database that are used for the application. Each project can have a different database.

```

### Installing
````
step 1: Start xampp-apache,mysql server from xampp control panel.
step 2: Dump the .sql file into the mysql database .
step 3: Place the source files in the htdocs folder which present inside the xampp folder 
`````
### How to run 

````
step 1: Open the index file in the web browser(eg: localhost/rootfolder/filename)
````
### working procedure
````

step 1: If the user is new, the user will first register and then will login. If the user is already existing user,the user can directly login.  
step 2: After the successful login, the page will redirect to the contacts.html page.
step 3: Click the plus button to create a new group (created groups are displayed in the page) it fires the @group_create.php file and stores the details in the  the @group_inf table and display the required details in the corresponding page by firing @send_group_info.php file 
step 4: The Paper clip is used to add contacts to the group.
step 5: The user can view the members of the group by clicking the 'view more...'  
step 6: The user can view all the contacts by clicking the contacts on the nav bar
step 7: The user can logout after performing all the operations

````

## Built With
* [HTML5,CSS3,JAVASCRIPT]  -CLIENT SIDE SCRIPTING 
* [BOOTSTRAP3]             -CSS,JS FRAMEWORK
* [JQUERY, ANGULAR JSV1]   -JAVASCRIPT FRAMEWORK
* [PHP5]                   -SERVER SIDE PROGRAMMING 

##Authors

A. Lalitha Madhuri
email-id: lalithamadhuri267@gmail.com
mobile-no: 9492585919


     
