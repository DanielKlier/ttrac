The beginnings of a time tracking app that aims to log your time with ease and eventually 
also log your time to JIRA tasks (if logged into a JIRA account).

The project was bootstrapped with create-react-app and uses bootstrap / react-bootstrap.

## Functions
- Create and delete named tasks and log time to one tasks at a time.
- Create and delete projects and assign tasks to projects.

## Roadmap
#### Test react-bootstrap dialogs
This is currently a pain. Dialogs are created as portals and there is no easy way to mount
and test components mounted in portals.

Possible solution: test dialog content apart from the dialog.

#### Notifications
Add timed notifications to a notification area.

#### Action log
Log some actions and add them to a log. Provide mechanisms to undo actions (e.g. delete).

#### Modal routes
Make dialogs open from a route (e.g. /create-project).

#### JIRA integration
Provide JIRA login mechanism (token or cookie). Link Tasks to JIRA tickets and projects to
JIRA projects. Provide people with a quick way to log time to a JIRA ticket.

#### Replicate state to a server
Create simple server that stores application state for an authenticated user.
State can be retained in local storage until synchronized to add offline capability.
