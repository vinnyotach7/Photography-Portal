# Photography-Portal

# By 
<ol>
<li>Vinny Otach - Scrum Master</li>
<li>Sylvester Omondi - Aunthentication/Backlog</li>
<li>Gerald Waweru - Frontend</li>
<li>Nick Munene - Events Platform</li>
</ol>

# Description 
This is an appliction where photographers can be able to log in and view the upcoming events and book and also they can post photos of any attended event and the user can sign in/up and see the photos and buy the photos at an agreed price with the photographer.

# Specs
<table>
  <tr>
  <td>Behaviour</td>
  <td>input</td>
  <td>Output</td>
  </tr>
  <tr>
  <td>Register account</td>
  <td>Fill in the registration form in the homepage</td>
  <td>Sends activation link to the registration email. The link should be clicked to activate the account</td>
  </tr>
  <tr>
  <td>Login</td>
  <td>fill the form with your username and password</td>
  <td>redirects the client to the homepage</td>
  </tr>
  <tr>
  <td>As a user;view the photos</td>
  <td>select the photos you like and add them to the cart</td>
  <td>It will display the amount you need to pay for the photos and the mode of payment</td>
  </tr>
  <tr>
  <td>As a photographer;view the events and book them</td>
  <td>you can upload the photos of the previous events for the user to view and select</td>
  <td>once a user selects the photos he/she wants,it will display the photographer's name and the mode of payment to the photographer</td>
  </tr> 
  </table>

# Set Up/Installtions
<ul>
<li>Ubuntu Software</li>
<li>Python3.6</li>
<li>Postgres</li>
<li>python virtualenv</li>
</ul>

# Cloning
Run the following command on the terminal: 
<table>
<tr>
<td>https://github.com/vinnyotach7/Photography-Portal.git</td>
</tr>
</table>

# Activate Virtual Environment
Activate virtual environment using python3.6 as default handler:
<table>
<tr>
<td>virtualenv -p /usr/bin/python3.6 venv && source venv/bin/activate</td>
</tr>
</table>

# Install dependancies
Install dependancies that will create an environment for the app to run: 
<table>
<tr>
<td>pip3 install -r requirements.txt</td>
</tr>
</table>

# Migration
<ul>
<li>pip install flask-migrate</li>
<li>python3.6 manage.py db init</li>
<li>python3.6 manage.py db migrate -m "Initial Migration"</li>
<li>python3.6 manage.py db upgrade</li>
</ul>

# Run the App
Python3.6 manage.py server

# Technologies used
<ul>
<li>python3.6</li>
<li>HTML</li>
<li>Bootstrap</li>
<li>JQuerry</li>
<li>Bulma</li>
<li>Heroku</li>
<li>Angular</li>
</ul>

# License 
Copyright (c) Vinny Otach