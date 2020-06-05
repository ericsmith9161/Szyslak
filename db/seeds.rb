# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#demo_user = User.create!(email: 'demo@demo.demo', username: 'demo', password: 'password')
admin = User.create!(email: 'admin@admin.admin', username: 'admin', password: 'password')

index_channel = Channel.create!(name: 'Main', details: 'Hang out here or check out some other channels', creator_id: admin.id)

Subscription.create!({user_id: demo_user.id, subscribeable: index_channel})
