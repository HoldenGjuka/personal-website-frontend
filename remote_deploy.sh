echo "Building app..."
npm run build

echo "Deploying files to server..."
sudo scp -r ./build/* holden@129.168.4.203:/var/www/holdengjuka.com/

echo "Done"