import SignUpForm from '@/components/common/auth/SignupForm';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { FieldDescription } from '@/components/ui/field';

import loginbg from '@/assets/loginbg.png';

const SignUp = ({ className, ...props }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <div className={cn('flex flex-col gap-6', className)} {...props}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              {/* SignUp form */}
              <SignUpForm />
              <div className="bg-muted relative hidden md:block">
                <img
                  src={loginbg}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
          <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our{' '}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            
          </FieldDescription>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
