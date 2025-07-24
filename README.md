|**********************************************************************;
* Program name      : ansible_nix_generic_ovpn
* Author            : Shane O'Sullivan
* Date created      : 06-25-2023
* Purpose           : Ansible script to set up an OpenVPN server on a Linux machine and setup ovpn client
*                   :
* Revision History  :
* Date                 Author      Ref    Revision (Date in MM-DD-YYYY format)
* 06-25-2023      sosulliv       1      Created Main ansible playbook.yml
* 02-05-2025      sosulliv       1      doing updates 
|**********************************************************************;
* Note:
* This script will test ansible inventory hosts file test upload
* client_management_playbook.yml - managing certificates
* del_client_playbook.yml - del ovpn accts
* add_client_playbook.yml - add ovpn accts