<h1 align="center"><strong>cycleShop</strong></h1>
<h3 align="center"><strong>Team Project</strong></h3>
Project Link: [https://cycleshop.netlify.app](https://cycleshop.netlify.app)




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/https://github.com/vaykoActual/project3">
    <img src="https://st.automobilemag.com/uploads/sites/11/2017/01/The-Race-of-Gentlemen-05.jpg" alt="Logo" width="280" height="180">
  </a>

  <h3 align="center"><strong>"Go Fast, Don't Die"</strong></h3>

  <p align="center">
    cycleShop is a MERN stack, full CRUD motorcycle exchange app. CycleShop facilitates consumer-to-consumer sales of motorcycles through the website. 
    <br />
    <br />
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Build a full stack Mongo/Express/React/Node app, commonly referred to as the MERN Stack.

<!-- Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description` -->


### Built With

* [React]()
* [Express]()
* [Node]()
* [MongoDB]()



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  npm inti -y
  npm install morgan express cors body-parser
  npm install nodemon -D
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/leeuwork/cycleshop
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   
## Usage

This app will demonstrate the CRUD framework utilizing Mongo, Express, React and Node. We setup the frontend as motorcycle e-commerce site with JWT authentication.


## Schema

```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Motorcycle = new Schema(
    {
        name: { type: String, required: true },
        imgURL: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        brand: { type: String, required: true },
    },
{ timestamps: true }
)

module.exports = mongoose.model('motorcycles', Motorcycle)
```
```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)
```

<!-- ROADMAP -->
## Roadmap
Flow-Chart 
![moto-chart (3)](https://user-images.githubusercontent.com/76179998/108370248-70848e80-71ca-11eb-9d5c-4900e2a29a66.png)

<!-- Styling - https://ibb.co/2WV5x7k
![Screen Shot 2021-02-11 at 4 11 15 PM](https://user-images.githubusercontent.com/76179998/107699277-dc736e00-6c83-11eb-8c88-c2cb2eecf6e5.png) -->


## Web Wire frames: 
### Home Screen:
![Home-Web](https://user-images.githubusercontent.com/76179998/107698328-63274b80-6c82-11eb-852a-8b58a13b8a5e.png)
### Brand Screen:
![Brand-Web 1920](https://user-images.githubusercontent.com/76179998/107698469-9669da80-6c82-11eb-86c0-d938d7915959.png)

### Product/Edit/Delete Screen:
![Product, edit, delete, MANAGE -Web](https://user-images.githubusercontent.com/76179998/107698426-88b45500-6c82-11eb-9dc3-4c76c11ff18a.png)
### Contact Screen:
![Contact-Web 1920 – 1](https://user-images.githubusercontent.com/76179998/107698524-aa154100-6c82-11eb-8913-f4f047bad384.png)
### Sign In Screen:
![Sign In-Web 1920](https://user-images.githubusercontent.com/76179998/107698576-be593e00-6c82-11eb-82b4-997e15aa9e57.png)
### Sign Up Screen:
![Sign Up-Web 1920 – 1](https://user-images.githubusercontent.com/76179998/107698610-cadd9680-6c82-11eb-8e72-01efb265991e.png)
### Sell Screen:
![Sell-Web 1920](https://user-images.githubusercontent.com/76179998/107698653-d9c44900-6c82-11eb-8e63-018079eeb941.png)




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Aslan Shaken: aslanshaken@gmail.com<br>
Varit Seekhao: <br>
Steven Strumolo: stevenstrumolo@gmail.com<br>
Shayne Vaykovich: svayko@gmail.com<br>


[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/vaykoActual/cycleShop
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/vaykoActual/cycleShop
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[stars-url]: https://github.com/vaykoActual/cycleShop
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/vaykoActual/cycleShop/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
