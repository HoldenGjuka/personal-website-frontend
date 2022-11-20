echo "Reloading nginx..."
ssh holden@192.168.4.203 'bash -s' < "sudo systemctl reload nginx"