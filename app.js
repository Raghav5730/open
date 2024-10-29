const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});                                              

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
function leadershipTeam() {
    const leadershipContent = `
        <html>
        <head>
            <title>Our Leadership Team</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    margin: 0;
                    color: black; /* Black text for readability */
                    background-color: #ffffff; /* White background color */
                }
                .title-container {
                    position: relative; /* Position relative for overlay */
                    background-image: url('sport5 (1).jpg'); /* Add your background image here */
                    background-size: cover; /* Cover the entire container */
                    background-position: center; /* Center the background image */
                    padding: 40px 0; /* Add padding around the title */
                    margin-bottom: 20px; /* Space below the title */
                    border-radius: 8px; /* Optional: Rounded corners for the title container */
                }
                .overlay {
                    position: absolute; /* Position the overlay over the image */
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
                    border-radius: 8px; /* Match the border radius */
                    z-index: 0; /* Place overlay behind text */
                }
                h1 {
                    color: #fff; /* White text for better visibility */
                    text-align: center; /* Center align the heading */
                    position: relative; /* Position relative for z-index */
                    z-index: 1; /* Bring text above background image and overlay */
                    padding: 20px 0; /* Add padding for spacing */
                }
                .leadership-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* Fixed 3-column layout */
                    gap: 20px; /* Space between grid items */
                }
                .leader {
                    display: flex;
                    flex-direction: column; /* Stack image and info vertically */
                    align-items: center;  
                    border: 1px solid #ccc; /* Add a border around each leader */
                    padding: 10px;
                    background-color: #f0f0f0; /* Light gray background for leader cards */
                    border-radius: 8px; /* Rounded corners */
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
                }
                .leader img {
                    max-width: 150px; /* Set a max width for images */
                    border-radius: 50%; /* Make images circular */
                }
                .leader-info {
                    text-align: center; /* Center align text */
                }
                h2 {
                    margin: 10px 0 5px; /* Margin adjustments for spacing */
                }
                p {
                    margin: 5px 0;
                }
            </style>
        </head>
        <body>
            <div class="title-container">
                <div class="overlay"></div> <!-- Overlay for contrast -->
                <h1>Our Leadership Team</h1>
            </div>
            <div class="leadership-container">
                <div class="leader">
                    <img src="CEO image.jpg" alt="CEO">
                    <div class="leader-info">
                        <h2>CEO</h2>
                        <p>Name: Nikhileshwar Kshirsagar</p>
                        <p>:  making corporate decisions, managing operations</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="director img.jpg" alt="Director">
                    <div class="leader-info">
                        <h2>Director</h2>
                        <p>Name: Ketan Shevatkar</p>
                        <p>: Experienced in managing Organization.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="./images/web-designer.jpg" alt="Project Manager">
                    <div class="leader-info">
                        <h2>Project Manager</h2>
                        <p>Name: Swapnil Tali</p>
                        <p>: Managing All The Projects Of the Organization.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="/images/java-developer.jpg" alt="Frontend Developer">
                    <div class="leader-info">
                        <h2>Frontend Developer</h2>
                        <p>Name: Janvi Wankhede</p>
                        <p>: Proficient in Frontend development.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="./images/angular-developer.jpg" alt="Software Engineer">
                    <div class="leader-info">
                        <h2>Software Engineer</h2>
                        <p>Name: Rutik Rokade</p>
                        <p>: Skilled in Java and front-end technologies.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="team-1.webp" alt="Backend Developer">
                    <div class="leader-info">
                        <h2>Backend Developer</h2>
                        <p>Name: Anurag Dhanorkar</p>
                        <p>: Specialized in server-side development.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="./images/data-engineer.jpg" alt="Data Engineer">
                    <div class="leader-info">
                        <h2>Data Engineer</h2>
                        <p>Name: Raghavendra Sevlikar</p>
                        <p>: Focused on data architecture and ETL processes.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="./images/data-engineer.jpg" alt="Data Engineer">
                    <div class="leader-info">
                        <h2>Data Engineer</h2>
                        <p>Name: Nishant Badhiye</p>
                        <p>: Focused on data architecture and ETL processes.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="./images/data-engineer.jpg" alt="Data Engineer">
                    <div class="leader-info">
                        <h2>Data Engineer</h2>
                        <p>Name: Vishwajeet Raut</p>
                        <p>: Focused on data architecture and ETL processes.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="./images/data-engineer.jpg" alt="Data Engineer">
                    <div class="leader-info">
                        <h2>Data Engineer</h2>
                        <p>Name: Swati Dhongade</p>
                        <p>: Focused on data architecture and ETL processes.</p>
                    </div>
                </div>
                <div class="leader">
                    <img src="./images/data-engineer.jpg" alt="Data Engineer">
                    <div class="leader-info">
                        <h2>Data Engineer</h2>
                        <p>Name: Sumiran Mahore</p>
                        <p>: Focused on data architecture and ETL processes.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open("", "Leadership Team", "width=800,height=600");
    if (newWindow) {
        newWindow.document.write(leadershipContent);
        newWindow.document.close();
    } else {
        alert("Popup blocked! Please allow popups for this website.");
    }
}







function openVentureCapital() {
    const ventureCapitalContent = `
        <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-color: #f0f0f0; /* Set the background color to light gray */
                    background-image: url('9.jpg'); 
                    background-size: 1200px 700px; /* Set the background image to 1920x1080 resolution */
                    background-position: center; /* Centers the image */
                    background-repeat: no-repeat; /* Prevents the image from repeating */
                    background-attachment: fixed; /* Keeps the background fixed when scrolling */
                    width: 1200;  /* Set body width */
                    height: 700; /* Set body height */
                    color: white; /* Change text color for better contrast */
                }
                h1, h2 { 
                    color: white; /* Adjusted to white to ensure visibility */
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
        </body>
        </html>
    `;

    // Open new window or write content to an element
    const newWindow = window.open("", "_blank");
    newWindow.document.write(ventureCapitalContent);
    newWindow.document.close(); // Close the document to render content
}



function openRIGFramework() {
    const rigFrameworkContent = `
       <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('6.jpg'); 
                    background-size: 1200px 700px; /* Set the background image to 1920x1080 resolution */
                    background-position: center; /* Centers the image */
                    background-repeat: no-repeat; /* Prevents the image from repeating */
                    background-attachment: fixed; /* Keeps the background fixed when scrolling */
                    width: 1200;  /* Set body width */
                    height: 700; /* Set body height */
                    color: white; /* Change text color for better contrast */
                }
                h1, h2 { 
                    color: white; /* Adjusted to white to ensure visibility */
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
            
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </body>
        </html>
    `;


    
    const newWindow = window.open("", "_blank");
    newWindow.document.write(rigFrameworkContent);
    newWindow.document.close(); // Close the document to ensure it's rendered correctly
}




function csr() {
    const csrContent = `
        <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('2.jpg'); 
                    background-size: 1200px 700px; /* Set the background image to 1920x1080 resolution */
                    background-position: center; /* Centers the image */
                    background-repeat: no-repeat; /* Prevents the image from repeating */
                    background-attachment: fixed; /* Keeps the background fixed when scrolling */
                    width: 1200;  /* Set body width */
                    height: 700; /* Set body height */
                    color: white; /* Change text color for better contrast */
                
                }
                h1, h2 { 
                    color: white; /* Adjusted to white to ensure visibility */
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
            
            </ul>
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(csrContent); // Corrected reference
    newWindow.document.close(); 
}



function codeOfConduct() {
    const cocContent = `
       <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('3.jpg'); 
                    background-size: 1200px 700px; /* Set the background image to 1920x1080 resolution */
                    background-position: center; /* Centers the image */
                    background-repeat: no-repeat; /* Prevents the image from repeating */
                    background-attachment: fixed; /* Keeps the background fixed when scrolling */
                    width: 1200;  /* Set body width */
                    height: 700; /* Set body height */
                    color: white; /* Change text color for better contrast */
                }
                h1, h2 { 
                    color: white; /* Adjusted to white to ensure visibility */
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
           
            </ul>
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(cocContent); // Corrected reference
    newWindow.document.close(); 
}


function valueProposition() {
    const vpContent = `
       <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('4.jpg'); 
                    background-size: 1200px 700px; /* Set the background image to 1920x1080 resolution */
                    background-position: center; /* Centers the image */
                    background-repeat: no-repeat; /* Prevents the image from repeating */
                    background-attachment: fixed; /* Keeps the background fixed when scrolling */
                    width: 1200;  /* Set body width */
                    height: 700; /* Set body height */
                    color: white; /* Change text color for better contrast */
                }
                h1, h2 { 
                    color: white; /* Adjusted to white to ensure visibility */
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
            </ul>
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(vpContent); // Corrected reference
    newWindow.document.close(); 
}

function safeShoreMethodology() {
    const safeshoreContent = `
        <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('7.jpg'); 
                    background-size: 1200px 700px; /* Set the background image to 1920x1080 resolution */
                    background-position: center; /* Centers the image */
                    background-repeat: no-repeat; /* Prevents the image from repeating */
                    background-attachment: fixed; /* Keeps the background fixed when scrolling */
                    width: 1200;  /* Set body width */
                    height: 700; /* Set body height */
                    color: white; /* Change text color for better contrast */
                }
                h1, h2 { 
                    color: white; /* Adjusted to white to ensure visibility */
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
            </ul>
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(safeshoreContent); // Corrected reference
    newWindow.document.close();
}
function awardsRecognition() {
    const awardsContent = `
       <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('5.jpg'); 
                    background-size: 1200px 700px; /* Set the background image to 1920x1080 resolution */
                    background-position: center; /* Centers the image */
                    background-repeat: no-repeat; /* Prevents the image from repeating */
                    background-attachment: fixed; /* Keeps the background fixed when scrolling */
                    width: 1200;  /* Set body width */
                    height: 700; /* Set body height */
                    color: white; /* Change text color for better contrast */
                }
                h1, h2 { 
                    color: white; /* Adjusted to white to ensure visibility */
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
            </ul>
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(awardsContent); // Corrected reference
    newWindow.document.close(); 
}

function showBlogs() {
    const blogsContent = `
        <html>
        <head>
            <title>Blogs</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('product-bg.jpg'); 
                    background-size: cover; 
                    background-position: center; 
                    color: white; /* Change text color for better contrast */
                }
                h1, h2 { 
                    color: white; 
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
            </style>
        </head>
        <body>
            <h1>Our Blogs</h1>
            <p>Welcome to our blog section, where we share insights, trends, and stories related to technology and innovation. Our team of experts contributes articles that cover a wide range of topics, including industry updates, best practices, and thought leadership.</p>
            <h2>Latest Articles</h2>
            <ul>
                <li><strong>WEB DEVELOPMENT</strong></li>
                <li><strong>Blog 1: Building Scalable Web Applications with Microservices Architecture</strong></li>
                <p><strong>Introduction:</strong><br>
                Discuss the growing need for scalable web applications due to the rise in users and data. Introduce <strong>microservices architecture</strong> as a solution that allows breaking down applications into smaller, independently deployable services.</p>

                <p><strong>Key Sections:</strong></p>
                <ol>
                    <li><strong>What is Microservices Architecture?</strong>
                        <ul>
                            <li>Define microservices and how they differ from monolithic architectures.</li>
                            <li>Discuss their benefits: independent scaling, fault isolation, and easier deployment.</li>
                        </ul>
                    </li>
                    <li><strong>Real-world examples of Scalable Applications Using Microservices</strong>
                        <ul>
                            <li>Mention popular platforms like Netflix, Uber, or Amazon that use microservices for scale.</li>
                        </ul>
                    </li>
                    <li><strong>Building Blocks of Microservices Architecture</strong>
                        <ul>
                            <li>Introduce key components: API gateways, service discovery, and message brokers.</li>
                            <li>Discuss how tools like Docker and Kubernetes have revolutionized the deployment and orchestration of microservices.</li>
                        </ul>
                    </li>
                    <li><strong>Best Practices for Implementing Microservices</strong>
                        <ul>
                            <li>Discuss the importance of API versioning, distributed tracing with tools like Jaeger, and the role of message queues (e.g., RabbitMQ or Kafka).</li>
                        </ul>
                    </li>
                </ol>
            </ul>
            <p>Stay tuned for more updates, and feel free to reach out with your comments and questions!</p>
        </body>
        </html>
    `;

    // Create a new window or tab and write the blogs content into it
    const newWindow = window.open();
    newWindow.document.write(blogsContent);
    newWindow.document.close();
}
function showIndustries() {
    const industriesContent = `
        <html>
        <head>
            <title>Industries We Serve</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-image: url('.jpg'); 
                    background-size: cover; 
                    background-position: center; 
                    background-repeat: no-repeat; 
                    background-attachment: fixed; 
                    color: black; 
                }
                h1, h2 { 
                    color: black; 
                }
                p { 
                    margin-bottom: 10px; 
                }
                ul { 
                    margin: 10px 0; 
                }
                img {
                    max-width: 100%; /* Responsive images */
                    height: auto; /* Maintain aspect ratio */
                    margin: 10px 0; /* Spacing around images */
                }
            </style>
        </head>
        <body>
            <h1>Industries We Serve</h1>
            <p>We are committed to delivering innovative solutions across various industries. Here are some of the key sectors we focus on:</p>
            <h2>Key Industries<h2>
            <ul>
                <li>
                    <strong>Manufacturing</strong>
                    <img src="10.jpg" alt="Manufacturing" /> <!-- Your image -->
                </li>
                <li>
                    <strong>TELECOM</strong>
                    <img src="11.jpg" alt="TELECOM" /> <!-- Your image -->
                </li>
                <li>
                    <strong>computing  services</strong>
                    <img src="12.jpg" alt="computing  services" /> <!-- Your image -->
                </li>
                <li>
                    <strong>Retail</strong>
                    <img src="1.jpg" alt="Retail" /> <!-- Your image -->
                </li>
                <li>
                    <strong>Manufacturing</strong>
                    <img src="1.jpg" alt="Manufacturing" /> <!-- Your image -->
                </li>
                <li>
                    <strong>Telecommunications</strong>
                    <img src="1.jpg" alt="Telecommunications" /> <!-- Your image -->
                </li>
                <li>
                    <strong>Education</strong>
                    <img src="1.jpg" alt="Education" /> <!-- Your image -->
                </li>
                <li>
                    <strong>Transportation</strong>
                    <img src="1.jpg" alt="Transportation" /> <!-- Your image -->
                </li>
            </ul>
            <p>Stay tuned for more updates on our solutions across these industries!</p>
        </body>
        </html>
    `;

    // Create a new window or tab and write the industries content into it
    const newWindow = window.open();
    newWindow.document.write(industriesContent);
    newWindow.document.close();
}
// script.js
function openServiceInNewWindow(serviceContent) {
    // Create a new window or tab
    const newWindow = window.open("", "_blank");
    
    // HTML structure for the new window content
    const content = `
        <html>
            <head>
                <title>${serviceContent.title}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        text-align: center;
                        background-color: #f5f5f5;
                    }
                    h1 {
                        color: #333;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        margin: 20px 0;
                    }
                </style>
            </head>
            <body>
                <h1>${serviceContent.title}</h1>
                <img src="${serviceContent.image}" alt="${serviceContent.title}">
                <p>${serviceContent.description || ''}</p>
            </body>
        </html>
    `;

    // Write the content into the new window
    newWindow.document.write(content);
    newWindow.document.close(); // Important to close the document to render it properly
}

function ams() {
    const serviceContent = {
        title: "AMS (Application Management Services)",
        image: "A.jpg", // Replace with the actual image URL
        description: "Our AMS solutions help businesses streamline application management for maximum efficiency and reliability."
    };
    openServiceInNewWindow(serviceContent);
}

function erpCrm() {
    const serviceContent = {
        title: "ERP & CRM",
        image: "B.jpg", // Replace with the actual image URL
        description: "Our ERP & CRM services include integration, customization, and optimization for your enterprise solutions."
    };
    openServiceInNewWindow(serviceContent);
}

function sap() {
    const serviceContent = {
        title: "SAP",
        image: "SAP.jpg", // Replace with the actual image URL
        description: "SAP solutions that enhance your business processes and operational efficiency."
    };
    openServiceInNewWindow(serviceContent);
}

function oracle() {
    const serviceContent = {
        title: "Oracle",
        image: "D.jpg", // Replace with the actual image URL
        description: "Comprehensive Oracle solutions tailored to your business needs."
    };
    openServiceInNewWindow(serviceContent);
}

function salesforce() {
    const serviceContent = {
        title: "Salesforce",
        image: "E.jpg", // Replace with the actual image URL
        description: "Maximize your CRM capabilities with our Salesforce services."
    };
    openServiceInNewWindow(serviceContent);
}

function murex() {
    const serviceContent = {
        title: "Murex",
        image: "F.jpg", // Replace with the actual image URL
        description: "Expertise in Murex for financial services and risk management."
    };
    openServiceInNewWindow(serviceContent);
}

function cloudServices() {
    const serviceContent = {
        title: "Cloud Services",
        image: "G.jpg", // Replace with the actual image URL
        description: "Reliable cloud services that enhance your digital transformation."
    };
    openServiceInNewWindow(serviceContent);
}

function managedServices() {
    const serviceContent = {
        title: "Professional & Managed Services",
        image: "H.jpg", // Replace with the actual image URL
        description: "Comprehensive managed services to optimize your IT infrastructure."
    };
    openServiceInNewWindow(serviceContent);
}

function mobility() {
    const serviceContent = {
        title: "Mobility",
        image: "I.jpg", // Replace with the actual image URL
        description: "Innovative mobility solutions for a connected world."
    };
    openServiceInNewWindow(serviceContent);
}

function emergingTech() {
    const serviceContent = {
        title: "Emerging Tech & Projects",
        image: "J.jpg", // Replace with the actual image URL
        description: "Explore cutting-edge technologies that drive innovation."
    };
    openServiceInNewWindow(serviceContent);
}

function dataAnalytics() {
    const serviceContent = {
        title: "Data Analytics",
        image: "K.jpg", // Replace with the actual image URL
        description: "Transform your data into actionable insights."
    };
    openServiceInNewWindow(serviceContent);
}

function infrastructure() {
    const serviceContent = {
        title: "Infrastructure Management Services",
        image: "L.jpg", // Replace with the actual image URL
        description: "Efficient management of IT infrastructure for enhanced performance."
    };
    openServiceInNewWindow(serviceContent);
}

function geospatial() {
    const serviceContent = {
        title: "Geospatial Services",
        image: "M.jpg", // Replace with the actual image URL
        description: "Advanced geospatial solutions for better decision-making."
    };
    openServiceInNewWindow(serviceContent);
}

function communication() {
    const serviceContent = {
        title: "Communication Services",
        image: "N.jpg", // Replace with the actual image URL
        description: "Reliable communication solutions that connect your business."
    };
    openServiceInNewWindow(serviceContent);
}

function siteReliability() {
    const serviceContent = {
        title: "Site Reliability Engineering & DevOps",
        image: "O.jpg", // Replace with the actual image URL
        description: "Enhance your site reliability with our expert DevOps practices."
    };
    openServiceInNewWindow(serviceContent);
}

function consulting() {
    const serviceContent = {
        title: "Consulting Services",
        image: "P.jpg", // Replace with the actual image URL
        description: "Strategic consulting services to drive your business forward."
    };
    openServiceInNewWindow(serviceContent);
}

function bpo() {
    const serviceContent = {
        title: "Business Process Outsourcing",
        image: "Q.jpg", // Replace with the actual image URL
        description: "Optimize your operations with our BPO services."
    };
    openServiceInNewWindow(serviceContent);
}

function testing() {
    const serviceContent = {
        title: "Testing Services",
        image: "R.jpg", // Replace with the actual image URL
        description: "Comprehensive testing services for quality assurance."
    };
    openServiceInNewWindow(serviceContent);
}

function training() {
    const serviceContent = {
        title: "Training Services",
        image: "S.jpg", // Replace with the actual image URL
        description: "Enhance your skills with our expert training services."
    };
    openServiceInNewWindow(serviceContent);
}

















menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
