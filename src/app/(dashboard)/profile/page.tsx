import { auth } from "@/auth";

import { PageContainer } from "@/components/dashboard/layout/page-container";
import { ProfileForm } from "@/components/profile/profile-form";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <PageContainer
      title="Meu perfil"
      description="Gerencie suas informações pessoais."
    >
      <ProfileForm
        defaultValues={{
          name: session?.user?.name ?? "",
        }}
      />
    </PageContainer>
  );
}