echo "Building app..."
npm run build

echo "Deleting currently deployed server build..."
sudo rm -R /var/www/holdengjuka.com/*

echo "Deploying files to server..."
sudo mv ./build/* /var/www/holdengjuka.com/

echo "Reloading nginx..."
sudo systemctl reload nginx

echo "Done"