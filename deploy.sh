echo "Building app..."
npm run build

echo "Deploying files to server..."
sudo mv ./build/* /var/www/holdengjuka.com

echo "Done"