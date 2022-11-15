echo "Building app..."
npm run build

echo "Deploying files to server..."
sudo scp -vr ./build/* holden@192.168.4.203:/var/www/holdengjuka.com/

echo "Done"