/* eslint-disable no-console */
import { User } from '../modules/User/user.model';
import config from '../config';

const createAdmin = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' });

    if (existingAdmin) {
      console.log('Admin already exists');
      return;
    }

    // Create admin user
    const admin = await User.create({
      name: config.admin_name,
      email: config.admin_email,
      password: config.admin_pass,
      role: 'admin',
    });

    console.log('Admin created successfully:', admin.email);
  } catch (error) {
    console.error('Error creating admin:', error);
  }
};

export default createAdmin;
