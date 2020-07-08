# README

![Szyslak](https://i.imgur.com/x2azDEb.png)


szyslak is a full stack Simpsons themed Slack clone allowing users to create accounts, join and create channels and single and multi-person direct message conversations, as well as maintain individual conversations for each channel and dm using web sockets.

### Technologies ###

* Backend: `Ruby on Rails` / `PostgreSQL`

* Frontend: `JavaScript` / `React.js` / `Redux.js`

* Styling: `HTML5` / `CSS`

* Compiling: `Webpack`

* Images: `Amazon Web Services S3`

* Live Chat: `Action Cable` / `WebSocket`

### Features ###

#### Authentication ####
* User authentication provided by `bcrypt` hashing function with salt to ensure user safety
* Application feature restriction
	- only logged in users have access to `channels`, `messages`, and `direct messages` as well as
  their associated functionality
  - visitors may login with a `demo account` to access protected features
#### Channels ####

- `channels` have complete CRUD functionality
- `users` can add other `users` to `channels` that they are a part of by searching through a list
of those not currently on the `channel`
- `users` can join `channels` to see channel specific `messages`

<img left="400" src="https://media2.giphy.com/media/J46MDVVjQC6xz5S2h7/giphy.gif" width="300" height="300" />

#### Live Chat ####

- `users` can post `messages` to `channels` or `direct_messages` with websocket integration
- `messages` utilize polymorphism to determine whether a `message` belongs to a `channel` or a `direct_message`
- `users` subscribe to either channels or direct messages via polymorphism as well


#### Direct Messages ####

- `users` can initialize `direct_message` conversations with other `users` of the platform, either
as one-on-one conversations or as a group chat
- `users` see the `direct_messages`conversations that have been started with them in the sidebar upon login
- in the `direct_message` creation screen users can click on a user to go to an already existing conversation,
or type in the search bar to create a multi-person conversation


<img left="400" src="https://media1.giphy.com/media/fsWWdclJtFDnHdRIcr/giphy.gif" width="300" height="300" />

#### Tribulations ####

* Slack has modals of all shapes and sizes, all over the screen. In order to accommodate this I created a modal function with a switch statement that rendered different modals depending on the call, allowing for reusability and simplicity of implementation

<img left = "400" src="https://i.imgur.com/E5Iuq9u.png" width="300"/>

* In order to make sure live chat was only showing up on the desired `channel` or `direct message` rather than across all visited `direct_message` and `channel` channels for a given user, I needed to ensure `messages` were broadcast to the proper channel. This also required removing subscriptions when the user switched to another channel, and incorporating a check upon update of channel and direct message components to subscribe to different channels as users navigate the site 

<img left="400" src="https://i.imgur.com/MfwL9WU.png" width="300"/>

### Installation ###

* PostgreSQL database required

### Setup ###

* In shell, `bundle install`
* In shell, `npm install`
* In shell, `bundle exec rails db:setup`

### Running the App ###

* In terminal, `rails s`
* In separate terminal window, `npm run webpack`

### Future Directions ###

* `user`/`channel` search in searchbar at top of page
* `threads` where users can comment on specific messages
* `mentions` where users can refer to other users within `messages`