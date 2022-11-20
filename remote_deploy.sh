echo "Building app..."
npm run build

echo "Deploying files to server..."
sudo scp -vr ./build/* holden@192.168.4.203:/var/www/holdengjuka.com/

# "Executing helper script, reloads nginx on remote machine..."
# ssh holden@192.168.4.203 'bash' < remote_helper.sh
# note that last time deploy did not update the website until the directory
# contents were deleted with 'rm -R *' and then the scp repeated

echo "Done"