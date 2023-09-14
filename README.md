## DATA GENERATOR FOR (JSON, Ruby on Rails migrations, SQL queries and EXCEL tables)

### What is this tool for?
This is a random data generator for developers or anyone that needs random mock data for migrating to a database or for any other use. This generator has several options to be chosen from such as `name, email, password, random dates, e.t.c`. Users are allowed to preview the random data before exporting to any format of their choice such as `JSON, RUBY, SQL and EXCEL (more formats will be added in the future)`.

### Why was this project created?
This project was created due to the little to no generator out there on the web that can be used to generate random ready to migrate data for Ruby on Rails(RoR) devs out there.

### Features

- Ruby on Rails migration file generation
- Export as excel
- Export as SQL
- Export in JSON format

<p float="left">
 <img src="https://github.com/kennyegun24/random_data_generator/assets/109461921/b98d7c1a-a03e-432a-b8c3-ef6437fbe7e2" width='400' /> 
 <img src='https://github.com/kennyegun24/random_data_generator/assets/109461921/eaa3ddf5-664c-45c0-9888-63a0eb769dc4' width='400'/>
 <img src='https://github.com/kennyegun24/random_data_generator/assets/109461921/eb33ea2c-b5e5-4006-9859-df602e880221' width='400'/>
 <img src='https://github.com/kennyegun24/random_data_generator/assets/109461921/3699be3f-fe07-43ac-8fbb-49d767b3b429' width='400'/>
 <img src='https://github.com/kennyegun24/random_data_generator/assets/109461921/4fa539ed-17d0-4b4d-bbbd-9164cd5bb7a2' width='500'/>
</p>
 
### How to use?

#### Get familiar with the fields and options.

 1. The input fields under the `Fields placeholder` is meant to represent the name of the data...
 2. The select tag/ option under the `type placeholder` is used to select the type of data that should be generated for that particular field e.g `phoneNumber, email, ip address`
 3. There is a general option you can choose for all types which is `null` and a unique options `max number of sentences and max words` for Sentences while `max-num` for Decimals
 4. The add field button is used to create new fields to add more data.
 5. The number of rows is used to limit the number of objects `JSON` and rows for other generate types. The maximum number of rows allowed is 1500.
 6. The generate select tag is used to select a particular type of data to be generated.
 7. The preview button is used to display the data generated...

#### Get familiar with the preview popup.
 ##### JSON
 1. The JSON preview has only copy and download buttons to download or copy the json code.
 ##### Ruby and SQL
 1. In this format, there are two input fields that are required by the user to fill which are the `Table name and also the reqired Action (create, insert, update)`.
 ##### Excel format.
 1. There are two displays in the excel preview. One is the table view, while the other is the raw view...
 2. When downloaded, the table can be opened on Microsoft Excel or any other app that opens `.xls` file extension

### Built with
- React.js

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Generate Laravel migrations]**
- [ ] **[Generate Django migrations]**
- [ ] **[Others]**
 
### Prerequisites
You should be having Node.js installed on your computer

### Setup
To get a local copy up and running follow these simple example steps.

Navigate to a folder where you want the cloned file to appear

Clone this repo in your terminal or git bash using the command `git clone https://github.com/kennyegun24/random_data_generator.git`

run `npm install`  to install all the necessary dependencies.

   ### Contributing
Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b  feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
