import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom'; // Import useNavigate

export const UserContex = createContext(null);

export const UserContexProvider = (props) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [user, setUser] = useState(null);

  const checkDataLogin = async (dataUser) => {
    try {
      await toast.promise(
        fetch('https://api.escuelajs.co/api/v1/users')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            const isValidUser = data.find(item =>
              dataUser.email === item.email && dataUser.password === item.password
            );
            if (isValidUser) {
              setUser(isValidUser);
              localStorage.setItem('user', JSON.stringify(isValidUser))
              isValidUser.role === "admin" ? navigate('/user?part=product') : navigate('/user?part=profile')
              return 'Success'; // موفقیت
            } else {
              setUser(null);
              throw new Error('User not found'); // خطا
            }
          }),
        {
          loading: 'در حال بررسی اطلاعات...',
          success: 'با موفقیت وارد شدید!',
          error: 'خطا کاربر پیدا نشد یا مشکلی در ارتباط با سرور وجود دارد.',
        }
      );
      return 'Success'; // موفقیت
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('مشکل در ارتباط با سرور. لطفاً دوباره تلاش کنید.');
      return 'Failure'; // شکست
    }
  };

  const addDataLogin = async (dataUser) => {
    const ExtenddataUser = {
      ...dataUser,
      name: dataUser.email.match(/^([^@]+)/)[1],
      avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    };

    try {
      await toast.promise(
        fetch('https://api.escuelajs.co/api/v1/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ExtenddataUser)
        }).then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${errorData.message}`);
          }
          return response.json(); // Return the response data
        }).then((data) => {
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data))
          navigate('/login'); // هدایت به صفحه کاربر
          return 'Success'; // موفقیت
        }),
        {
          loading: 'در حال ارسال اطلاعات...',
          success: 'کاربر با موفقیت ایجاد شد!',
          error: 'خطا در ایجاد کاربر. لطفاً دوباره تلاش کنید.'
        }
      );
      return 'Success'; // موفقیت
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('مشکل در ارسال اطلاعات. لطفاً دوباره تلاش کنید.');
      return 'Failure'; // شکست
    }
  };

  const compressImage = (file, maxWidth = 800, maxHeight = 800, quality = 0.7) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
  
        img.onload = () => {
          let width = img.width;
          let height = img.height;
  
          // محاسبه نسبت ابعاد
          if (width > height) {
            if (width > maxWidth) {
              height = Math.floor((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.floor((width * maxHeight) / height);
              height = maxHeight;
            }
          }
  
          // ایجاد یک canvas برای رسم تصویر فشرده
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
  
          canvas.width = width;
          canvas.height = height;
  
          ctx.drawImage(img, 0, 0, width, height);
  
          // تبدیل canvas به Blob و سپس به فایل فشرده
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                });
                resolve(compressedFile);
              } else {
                reject(new Error('فشرده‌سازی تصویر ناموفق بود.'));
              }
            },
            'image/jpeg',
            quality
          );
        };
  
        img.onerror = () => {
          reject(new Error('بارگذاری تصویر ناموفق بود.'));
        };
      };
  
      reader.onerror = () => {
        reject(new Error('خواندن فایل ناموفق بود.'));
      };
  
      reader.readAsDataURL(file);
    });
  };
  
  const contextValue = { user, setUser, checkDataLogin, addDataLogin,compressImage };

  return (
    <UserContex.Provider value={contextValue}>
      {props.children}
    </UserContex.Provider>
  );
}
