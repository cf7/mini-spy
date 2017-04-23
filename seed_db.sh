#!/bin/bash

$(npm bin)/sequelize db:seed --seed $(npm bin)/../../server/seeders/20170413000757-sample-staff-members.js
$(npm bin)/sequelize db:seed --seed $(npm bin)/../../server/seeders/20170413000813-sample-clients.js
$(npm bin)/sequelize db:seed --seed $(npm bin)/../../server/seeders/20170413000819-sample-roles.js
$(npm bin)/sequelize db:seed --seed $(npm bin)/../../server/seeders/20170413000839-sample-staff-member-roles.js
$(npm bin)/sequelize db:seed --seed $(npm bin)/../../server/seeders/20170423084855-sample-casenotes.js

# What does everyone think?
# with this system each new seeder we add needs its own bash line here
#
# Another option would be to provide sample data via javascript script files
# by requiring the Models modules and manually calling
# StaffMember.create({ . . . }) for example
# but we would lose the convenience of bulkDelete (undoing the seeds)
# and other functions provided by the queryInterface in seeders
# In the end, having to add new lines in js files for dozens of samples
# (and their delete equivalents) is probably just as tedious as making
# a new seeder and adding one line here
