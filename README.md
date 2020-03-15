# CityCommute
Rohan Balakrishna, Jack Freilich, Hidde Verholt

EECS 330 - P8 (Final Report)

3/14/2020

I - Problem and Related Work

	Commuting to and from a location is a deeply rooted practice in lives around the world. A study done by the Harvard Business School revealed that in the United States alone, 25 million people spend 90 minutes commuting to work and another 600,000 spend more than 90 minutes on a single direction in their commute (Lee 2017). A person that commutes regularly can realize time and cost benefits from travel adjustments that scale dramatically over the course of months and years. However, travel preferences are a function of constantly varying factors, such as weather, safety, timing and cost. New services such as Uber, Lyft and JumpBike have grown popular in recent years, meaning individuals have more flexibility in their transportation options than ever. The problem for commuters has now become an inability to seamlessly navigate all possible options and quickly optimize their trip. 
Multiple apps have taken a stab at holistic travel planning. Apple Maps and Moovit display options to walk, drive, take public transportation and even use a rideshare application. Still, neither are perfect and we felt that we could build on their concepts. For example, neither app gives an explicit list of prices and times and it is difficult for users to actually view their options on one screen. Additionally, neither app considers weather, or gives an option for users to quickly access the current weather. Finally, there is no ability on these applications to configure preferences for travel time or cost. Given these shortcomings, we felt that there was still room for a more comprehensive and customizable solution to the modern commuter’s problem. 


II - User Research

	In our initial research, we conducted interviews with students who frequently used apps for transportation as well as professionals who commuted regularly into the city. For each interview, we asked people about their commuting and traveling habits, including how much they varied their methods, how they settled on travel preferences and how they used apps to navigate their commutes. 
The interviews and conversations with people revealed challenges about CityCommuter gaining traction due to the entrenched nature of routines. For example, once people settled in on a specific mode of transportation for a regular commute, potential benefits from changes were rarely enough to sway decision-making. Alternatively, while people may have been indifferent about their daily commutes to work, a singular rideshare trip downtown would give rise to comparing prices between apps. Thus, the key to growing a consumer base for our project would be convincing people about how much they would benefit from consistent usage of our app.

III - Paper Prototyping

We took a methodical approach to prototyping, asking users to consider how they would navigate the paper interface to achieve realistic and relevant tasks. Our testing gave us a better sense of what we needed to do to create a successful app. First, we wanted to determine whether demand for our product existed. Not only were people excited for the app and envisioned themselves using it regularly, but they also were not aware of competing concepts in other apps. Additionally, we wanted to test the intuitiveness of our design. While users immediately understood the goals of our app without context, many had difficulty with functional components. Observations of this phenomena highlighted the necessity to mimic the design of precedent navigation apps, while simultaneously making our design as easy to use as possible. We resolved to create a simplistic design that had a low learning barrier for new users. 
FULL VIDEO: https://vimeo.com/397563930


IV - High Fidelity Prototyping

Our prototypes supported a range of tasks that one would expect from an app with our goals. Users can enter any starting address, any destination, any travel preference and any combination of transportation options. An example could be “finding the cheapest options to Wrigley Field by checking Uber, Lyft and bus options.” However, any permutation of these selections is supported by our app and each selection can be expanded for more information. Once the options are loaded, users can “view the weather” by examining the module in the upper right part of the app. Finally, users can navigate back to the home screen to enter another commute configuration. 

The three components that we chose to implement were data collection, external data
integration and data selection. Data collection is executed on the home page, where users can enter text for their address and destination, pick one of three sorting preferences and choose any combination of transportation options to display. We integrated external data in our weather module and in the live map, which reads data from the “destination” search bar on the home page. Finally, users “select” data on the home page by picking which transportation options they wish to view and then can view unique information about each option by clicking on each one in the main page. 

V - Reflection

Overall, we were satisfied with our functionality that we were able to implement in the time we had. We feel that we’ve covered the essence of the interface that we had envisioned. As is so often the case programming project, our design complexity was a function of the amount of external data we were able to integrate. For example, we were able to configure a map using the Yelp API and this allowed us to add search components. Conversely, we were unable to get any data about prices or routes from Uber and Lyft, thus making it infeasible to display actual prices and useless to implement any actual sort function. If we had more time, our focus and energy would have gone to solving this issue, since test users primarily saw promise in our design from the ability to compare live prices and travel times. 
Fitting our design to an iPhone bought the app to life and created a much better layout than we had previously. We feel that our design generally captures most of the structural components of similar apps, which was always a high priority. Unfortunately, we realized that the iFrame which we used made it impossible to have overflow in the options screen (if too many options are expanded a strange bug occurs. Several StackOverflow posts confirmed this was an unavoidable issue). It also ruined our Venmo/Wallet integration but we decided that the iFrame was worth it since these sacrifices are marginal compared to the overall progress we made. 

VI - Links and User Instructions
Link to repository: https://github.com/CityCommute/CityCommute
Link to working version: https://citycommute.github.io/CityCommute/

As part of recent efforts, we’ve managed to fit our app into a phone outline to understand how this might be viewed on a standard smartphone. To run the app, just click the link and follow the instructions on the home page. Once on the main page, you can now get more feedback when you click on options. 
Thank you for a great quarter

Works Cited
Lee, Julia. “Reclaim Your Commute.” Harvard Business Review, Harvard Business School
Publishing, 1 May 2017, hbr.org/2017/05/reclaim-your-commute. Accessed 23 Jan. 2020.

