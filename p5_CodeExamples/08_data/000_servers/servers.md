# Servers

A [server](http://whatis.techtarget.com/definition/server) is a computer program that provides 'services' to other programs or computers.

## client / server
In CS the client / server model is setup to fulfill the needs of the client. A client is a requesting program or user. Up until this point, all of our p5 sketches have utilized 'client-side scripting'. This is where the users web browser handles all of the computational overhead. In these early examples, the web browser was able to easily locate and load all of the files in a directory.

A server delivers data or files to a requesting client application. Server-side scripting would refer to any workloads that the server performs instead of the client; then sending that data to the client.

## Why do we need a server?
Since we are trying to pull in large text files, our client application expects to be able to query a server for the data as they need it. This server will then deliver this data in an appropriate fashion.

You will find that whenever you are trying to load your own large data files, or do any peer-to-peer communication that a server will need to be setup.

The reason for this is that the commands for loading this files are 'asynchronous'. This means that the program is free to keep executing while the data loads. Once the data has loaded, it will execute a 'callback function'. This callback function that does something with the data inside our program. See the p5 file on working with AJAX for more info.
https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON

You may also find in the future a need to store data between executions of a program. This is the perfect use for a server, as the server has the ability to store this data in a text file, or better yet, a database (DB) such as a MySQL DB.

## Setting Up a Local Server
I would suggest you follow the instructions for setting up a server outlined on the p5.js server github page. Additionally, for simple examples, you should use the Python examples. Simply navigate to the directory where you p5 sketch/s is/are and launch the server with the appropriate command (whether you have Python 2 or 3). For more adventurous users, please explore the node.js or Apache options.

- https://github.com/processing/p5.js/wiki/Local-server
