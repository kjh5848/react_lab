import React, {useEffect, useState} from 'react'
import classnames from 'classnames'; // classnames를 설치한 후에 import

function Alert({color:color_, children}){
    const color = color_ ?? "white";

    return(
        <div>
            <div>
                <span>
                    <i className={`text-[${color}]`}></i>
                </span>
                <span>{children}</span>
            </div>
        </div>
    )
}

function NotifyOnce({children}) {
    const [visible, setVisible]  = useState(false)
    const [workDone, setWorkDone] = useState(false)

    useEffect(() => {
        if(!workDone){
            setTimeout(() =>setVisible(true), 1000);
            setTimeout(() =>setVisible(false), 3000);
            setWorkDone(true);
        }
    }, [workDone]);

    return (
        <div className={classnames('fixed transition-all right-[10px]', {
            "top-[-60px]": !visible,
            "top-[-10px]": visible,
        })}>
            {children}
        </div>
    );
}

export const Ex05 = () => {
  return (
    <>
      <NotifyOnce>
        <Alert>"안녕." 그녀는 말했다.</Alert>
      </NotifyOnce>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi
        ducimus, sunt harum laboriosam deserunt aliquam quas architecto odio
        neque voluptas! Voluptatum perferendis quis fugit nobis sunt obcaecati
        corporis tempore!
      </div>
    </>
  );
}
