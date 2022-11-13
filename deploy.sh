echo "Building app..."
npm run build

echo "Deleting currently deployed server build"
sudo rm /var/www/holdengjuka.com/*

echo "Deploying files to server..."
sudo mv ./build/* /var/www/holdengjuka.com

echo "Done"